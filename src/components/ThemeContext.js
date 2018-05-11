// @flow
import * as React from "react";
import createReactContext, { type Context } from "create-react-context";

import { NAME as BASE } from "../styles/themes.base";
import { type Theme } from "../styles/themes";

const ThemeContext: Context<Theme> = createReactContext(BASE);

type Props = {
  children: React.Node
};

type State = {
  theme: string
};

export class ThemeProvider extends React.Component<Props, State> {
  state = { theme: BASE };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
