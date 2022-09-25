const TradeSettings = require("../Models/TradeSettings");
const getRobotSettings = async (id) => {
  const settings = await TradeSettings.findOne({ where: { id: id } });
  return settings;
};
const deactivateRobot = async (id) => {
  try {
    const settings = await TradeSettings.findOne({
      where: { id: id },
    });
    settings.active = false;
    await settings.save();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getRobotSettings, deactivateRobot };
