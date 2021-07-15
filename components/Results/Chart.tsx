import React from "react";
import { Chart, Line, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import dimensions from "../../constants/Layout";
import globalStyles from "../../constants/Styles"

class AxesExample extends React.PureComponent {
  render() {

    return (
        <Chart
        style={{ height: (dimensions.window.width-2*globalStyles.container.padding)/2, width: dimensions.window.width-2*globalStyles.container.padding,}}
        data={[
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 6 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 8 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 0, max: 100 }}
      >
        <VerticalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
        <HorizontalAxis tickCount={6} />
        <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>
    );
  }
}

export default AxesExample;
