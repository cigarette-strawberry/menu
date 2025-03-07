import type { PageTabCssVars, PageTabCssVarsProps } from '../types';

/** The active color of the tab */
export const ACTIVE_COLOR = '#1890ff';

function createCssVars(props: PageTabCssVarsProps) {
  const cssVars: PageTabCssVars = {
    '--soy-primary-color': props.primaryColor
    /* '--soy-primary-color1': props.primaryColor1,
    '--soy-primary-color2': props.primaryColor2,
    '--soy-primary-color-opacity1': props.primaryColorOpacity1,
    '--soy-primary-color-opacity2': props.primaryColorOpacity2,
    '--soy-primary-color-opacity3': props.primaryColorOpacity3 */
  };

  return cssVars;
}

export function createTabCssVars(primaryColor: string) {
  const cssProps: PageTabCssVarsProps = {
    primaryColor
  };

  return createCssVars(cssProps);
}
