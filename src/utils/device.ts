import { UAParser } from "ua-parser-js";

export interface DeviceInfo {
  os: string;
  browser: string;
  deviceType: string;
  raw: string;
}

/**
 * DeviceUtils - Professional extraction of device/browser metadata.
 * Updated for ua-parser-js v2.0+ compatibility.
 */
export const DeviceUtils = {
  /**
   * Parses a raw User-Agent string into a structured object.
   */
  parse(userAgent: string | undefined): DeviceInfo {
    // @ts-ignore - Construct signature may be hidden in some hybrid module environments
    const parser = new UAParser(userAgent);
    const os = parser.getOS();
    const browser = parser.getBrowser();
    const device = parser.getDevice();

    return {
      os: `${os.name || "Unknown"} ${os.version || ""}`.trim(),
      browser: `${browser.name || "Unknown"} ${browser.version || ""}`.trim(),
      deviceType: device.type || "desktop",
      raw: userAgent || "Unknown",
    };
  },
};
