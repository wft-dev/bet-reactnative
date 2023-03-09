
/** AppButtonNames use for AppButton text */
export const  AppButtonNames = {
  activateDevice : "ACTIVATE DEVICE",
  dectivateDevice : "DEACTIVATE DEVICE",
  bettingView : "BETTING VIEW",
  makeBet : "MAKE BET",
  back : "Back",
  save: "Save"
}

/** AppButtonNames use for AppButton text */
export const  AppAlertText = {
  makeBetMesaage : "bet is made successfully",
  carNameMessage : "Car Name is required.",
  betPriceMessage : "Bet Price is required.",
  betTitle : "Bet",
  alertTitle : "Alert",
  okButtonText : "OK",
}

/** AppButtonNames use for AppButton text */
export const  AppText = {
  demodRaceText : "The Demo Race",
  makeBetText : "Make Bet",
  carNameText : "Enter Car Name",
  betPriceText : "Enter Bet Price"
}

/** This betting data use in the betting view */
export interface BettingData {
  carName: string;
  betPrice: number;
}
