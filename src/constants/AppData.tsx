
/** AppButtonNames use for AppButton text */
export const  AppButtonNames = {
  activateDevice : "ACTIVATE DEVICE",
  dectivateDevice : "DEACTIVATE DEVICE",
  bettingView : "BETTING VIEW",
  makeBet : "MAKE BET",
  back : "Back",
  save: "Save"
}

/** AppAlertText use for Alert text */
export const  AppAlertText = {
  makeBetMesaage : "bet is made successfully",
  carNameMessage : "Car Name is required.",
  betPriceMessage : "Bet Price is required.",
  betTitle : "Bet",
  alertTitle : "Alert",
  okButtonText : "OK",
}

/** AppText use for app screen title, placeholder text */
export const  AppText = {
  demoRaceText : "The Demo Race",
  makeBetText : "Make Bet",
  carNameText : "Enter Car Name",
  betPriceText : "Enter Bet Price"
}

/** This betting data use in the betting view */
export interface BettingData {
  carName: string;
  betPrice: number;
}
