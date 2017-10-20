// @flow
import type { FixedIo } from '../io/fixIo.js'
import type { WalletInfo } from './login/login-types.js'

export {
  addCurrencyWallet,
  renameCurrencyWallet,
  setCurrencyWalletFiat,
  setCurrencyWalletTxMetadata,
  setupNewTxMetadata
} from './currencyWallets/actions.js'

export { setupPlugins } from './plugins/actions.js'

export { addStorageWallet, syncStorageWallet } from './storage/actions.js'

/**
 * The account fires this when it loads its keys from disk.
 */
export interface AccountKeysLoadedAction {
  type: 'ACCOUNT_KEYS_LOADED';
  payload: {
    activeLoginId: string,
    walletInfos: Array<WalletInfo<any>>
  };
}

/**
 * Initializes the redux store on context creation.
 */
export interface InitAction {
  type: 'INIT';
  payload: {
    apiKey: string | void,
    appId: string | void,
    authServer: string | void,
    io: FixedIo,
    onError: (e: Error) => void
  };
}

/**
 * Fires when a user logs in.
 */
export interface LoginAction {
  type: 'LOGIN';
  payload: {
    appId: string,
    loginKey: Uint8Array,
    username: string
  };
}

/**
 * Fires when a user logs out.
 */
export interface LogoutAction {
  type: 'LOGOUT';
  payload: { activeLoginId: string };
}

export type RootAction =
  | AccountKeysLoadedAction
  | InitAction
  | LoginAction
  | LogoutAction
