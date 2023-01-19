import {Alert} from 'react-native';
import {
  authorizeAsync,
  AuthorizeErrorNoNetwork,
  canDeauthorizeAsync,
  CheckoutErrorCancelled,
  CheckoutErrorSdkNotAuthorized,
  deauthorizeAsync,
  getAuthorizedLocationAsync,
  startCheckoutAsync,
  UsageError,
} from 'react-native-square-reader-sdk';

class SquareReader {
  authorizedLocation: any;

  constructor() {
    this.authorizedLocation = null;
  }

  async initialize(authCode: string) {
    await this.getExistingAuthorizedLocation();
    if (this.authorizedLocation) {
      return;
    }
    try {
      this.authorizedLocation = await authorizeAsync(authCode);
      // Authorized and authorizedLocation is available
    } catch (ex: any) {
      switch (ex.code) {
        case AuthorizeErrorNoNetwork:
          // Remind connecting to network
          break;
        case UsageError:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
          }
          Alert.alert('Error', errorMessage);
          break;
      }
    }
  }

  async startCheckout(amountMoney: number) {
    // A checkout parameter is required for this checkout method
    const checkoutParams = {
      amountMoney: {
        amount: amountMoney,
        currencyCode: 'USD',
      },
    };

    try {
      const checkoutResult = await startCheckoutAsync(checkoutParams);
      return checkoutResult;
      // checkout finished successfully and checkoutResult is available
    } catch (ex: any) {
      switch (ex.code) {
        case CheckoutErrorCancelled:
          // Handle canceled transaction here
          break;
        case CheckoutErrorSdkNotAuthorized:
          // Handle sdk not authorized
          break;
        default:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
          }
          Alert.alert('Error', errorMessage);
          break;
      }
    }
  }

  async getExistingAuthorizedLocation() {
    try {
      this.authorizedLocation = await getAuthorizedLocationAsync();
    } catch (ex: any) {
      if (__DEV__) {
        Alert.alert(ex.debugCode, ex.debugMessage);
      }
    }
  }

  async deauthorize() {
    if (await canDeauthorizeAsync()) {
      try {
        await deauthorizeAsync();
        return true;
      } catch (ex: any) {
        let errorMessage = ex.message;
        if (__DEV__) {
          errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
          console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
        }
        Alert.alert('Error', errorMessage);
      }
    } else {
      return false;
    }
  }
}

export default SquareReader;
