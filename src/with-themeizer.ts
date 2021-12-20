import type { Configuration, RuleSetRule, RuleSetUseItem } from 'webpack/types';
import ThemeizerPlugin from 'themeizer/dist/webpack/plugin';

type NextConfig = {
    webpack?: (config: Configuration, options: any) => Configuration;
};

type Plugin = (nextConfig:NextConfig) => NextConfig

const withPreprocessor: Plugin = (nextConfig = {}) => ({
	...nextConfig,
	webpack(config: Configuration, options: any) {
        const themeizerOptionsRow = process.env.THEMEIZER_OPTIONS;
        if (!themeizerOptionsRow) throw new Error('Please, add process.env.THEMEIZER_OPTIONS');
        const themeizerOptions = JSON.parse(themeizerOptionsRow);
        if (!themeizerOptions.url) throw new Error('Please, add url');

        const oneOfRule = config.module!.rules!.find(
          (rule) => typeof (rule as RuleSetRule).oneOf === 'object'
        );

        if (!oneOfRule || typeof oneOfRule === 'string' || !oneOfRule.oneOf) throw new Error('Unknown');

        const scriptVariantIndex = oneOfRule.oneOf.findIndex(rule => (
            rule.test?.toString().match(/\/\\.\(tsx|ts|js|cjs|mjs|jsx\)\$\//) && !rule.issuerLayer
        ))

        if (scriptVariantIndex === -1) throw new Error('Unknown');

        const scriptRule = oneOfRule.oneOf[scriptVariantIndex];

        if (!scriptRule.use) throw new Error('Unknown');
  
        if (!Array.isArray(scriptRule.use)) scriptRule.use = [scriptRule.use as RuleSetUseItem];
        scriptRule.use.push(require.resolve('themeizer'));
        config.plugins!.push(new ThemeizerPlugin(themeizerOptions));

		if (typeof nextConfig.webpack === 'function') {
			return nextConfig.webpack(config, options);
		}
		return config;
	},
});

export default withPreprocessor;
