import { MantineThemeOverride, Tuple } from "@mantine/core";
import ShadeGenerator from "shade-generator";
import { brandConfig } from "../config";

export const brandTheme: MantineThemeOverride = {
  colors: {
    primaryBackgroundColor: getColorArray(
      brandConfig.primaryComponentBackgroundColor
    ),
    primaryTextColor: getColorArray(brandConfig.primaryComponentTextColor),
    secondaryBackgroundColor: getColorArray(
      brandConfig.secondaryComponentBackgroundColor
    ),
    secondaryTextColor: getColorArray(brandConfig.secondaryComponentTextColor),
    notification: getColorArray(brandConfig.notificationColor),
    success: getColorArray(brandConfig.successColor),
    warning: getColorArray(brandConfig.warningColor),
    danger: getColorArray(brandConfig.dangerColor),
    info: getColorArray(brandConfig.infoColor),
    backgroundColor: getColorArray(brandConfig.backgroundColor),
    textColor: getColorArray(brandConfig.textColor),
    mutedTextColor: getColorArray(brandConfig.mutedTextColor),
  },
  primaryColor: "primary",
};

function getColorArray(hexStr: string): Tuple<string, 10> {
  const colorMap = ShadeGenerator.hue(hexStr).shadesMap("hex");
  return [
    colorMap[40],
    colorMap[50],
    colorMap[60],
    colorMap[70],
    colorMap[80],
    colorMap[90],
    colorMap[100],
    colorMap[200],
    colorMap[300],
    colorMap[400],
  ];
}
