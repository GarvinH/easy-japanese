import _ from "lodash";
import React from "react";
import {
  Chart,
  Line,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import dimensions from "../../constants/Layout";
import globalStyles from "../../constants/Styles";
import colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

interface ResultsGraphProps {
  data: readonly number[];
}

const ResultsGraph = ({ data }: ResultsGraphProps) => {
  const colorScheme = useColorScheme();

  const formattedData = _.map(data, (number, index) => ({
    y: number,
    x: index+1,
  }));

  return (
    <Chart
      style={{
        height:
          (dimensions.window.width - 2 * globalStyles.container.padding) / 2,
        width: dimensions.window.width - 2 * globalStyles.container.padding,
      }}
      data={formattedData}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 1, max: 10 }}
      yDomain={{ min: 0, max: 100 }}
    >
      <VerticalAxis
        tickCount={6}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={10} />
      <Line
        theme={{
          stroke: { color: colors[colorScheme].tint, width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
};

export default ResultsGraph;
