import { css } from 'styled-components';

export const svgStyle = css`
  display: inline-block;
  width: auto;
  height: 1.5em;
  vertical-align: top;
  fill: currentColor;
  stroke-width: 0;
  stroke: currentColor;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;
