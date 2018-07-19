const LANG_EN = {
  'CLAIM_INTEREST': {
    'LOCKTIME_IS_UNSET': 'Locktime is unset! Your UTXO is not accruing interest.',
    'LOCKTIME_IS_SET_TO': 'Locktime is set to',
    'SHOW_ZERO_INTEREST': 'Show zero rewards',
    'REQ_P1': 'Requirements to accrue rewards',
    'REQ_P2': 'spend transaction was made at least 1 hour ago, locktime field is set and amount is greater than',
    'CLAIM_INTEREST': 'Claim @template@ rewards',
    'LOADING': 'Loading rewards data',
    'NO_DATA': 'No data',
    'TIP': 'Tip',
    'NOTICE': 'Notice',
    'TIP_DESC': 'don\'t attempt to claim rewards smaller than 0.01 KMD. A fee you have to pay for transaction will be more or equal to the rewards amount.',
  },
  'ABOUT': {
    'AGAMA_WALLET': 'Agama Wallet',
    'ABOUT_AGAMA': 'About Agama',
    'ABOUT_AGAMA_ALT': 'About Agama Web Wallet',
    'AGAMA_MODES': 'Agama Wallet is a web app that you can use to manage multiple cryptocurrency wallets. ' +
                   'It\'s based on SPV method which relies on a centralized entity called Electrum server to retrieve blockchain data. In addition to that Agama Web wallet also requires Electrum proxy service to connect to Electrum servers.',
    'AGAMA_NOTE': 'Note: Agama Web Wallet is still in development. ' +
                  'It is safe to use, but you should make proper backups. ' +
                  'We do not recommend using it as the primarily wallet for your cryptocurrencies.',
    'TESTERS': 'Testers',
    'TESTERS_P1': 'You can help us test Agama Web Wallet. Just visit',
    'TESTERS_OR': 'or',
    'TESTERS_P2': 'download the latest standalone release',
    'TESTERS_P3': 'Then, report any bugs you encounter to our developers on the',
    'TESTERS_P4': 'Your help is greatly appreciated!',
    'CHANNEL': 'channel',
    'GET_AN_INVITE': 'Get an invite',
    'GET_AN_INVITE_P2': 'to our Discord if you\'re not registered yet'
  },
  'API': {
    'CANT_BROADCAST_TX': 'Can\'t broadcast transaction',
    'BAD_TX_INPUTS_SPENT': 'Bad transaction inputs spent',
    'PUSH_ERR': 'Failed to push transaction',
    'ERROR_SM': 'error',
    'COULDNT_COPY_ADDRESS': 'Couldn\'t copy address to clipboard',
  },
  'INDEX': {
    'FOR_GUIDES_AND_FAQ': 'For guides & FAQ please go to',
    'TO_SEND_FEEDBACK': 'To send feedback please open a ticket at',
    'STANDALONE': 'Standalone',
    'SYNC_IN_PROGRESS': 'Synchronization is in progress',
    'ERROR': 'Error',
    'PROXY_CON_ERR': 'Proxy connection error',
    'CANCEL': 'Cancel',
    'QR_CODE': 'QR-code',
    'PUB_KEY': 'pub key',
    'PRICE_PER': 'Price per',
    'LITE': 'Lite',
    'YOUR_SEED_IS_INCORRECT': 'Your seed doesn\'t seem to be correct. Please logout and repeat wallet creation procedure again.',
    'SEED_VERIFICATION_ERROR': 'Seed verification error!',
    'YOUR_SEED_IS_CORRECT': 'Your seed appears to be correct. As a final check up please double check that the public address you wrote down earlier is matching the one you see right now.',
    'CONGRATS_YOURE_ALL_SET': 'Congrats, you are all set!',
    'PLEASE_WRITE_DOWN_YOUR_PUB': 'Please write down your public address, logout and login into Agama again to verify that your seed is correct.',
    'FIRST_TIME_SEED_USE': 'First time seed use',
    'UNDERSTAND_RISKS_LINK': 'Understand the risks in using Agama web wallet',
    'WALLET_OFFLINE': 'Agama is currently unable to connect to the Internet.',
    'OFFLINE': 'Offline',
    'TOGGLE_COIN_CONTEXT_MENU': 'Toggle coin context menu',
    'TOP_MENU': 'Top menu',
    'ERROR_READING': 'Error reading',
    'SHOW': 'Show',
    'SPV_SERVER_IP': 'Server IP',
    'SPV_SERVER_PORT': 'Server Port',
    'SPV_SERVER_CON_TYPE': 'Connection type',
    'SPV_MODE': 'Lite (SPV) Mode',
    'BLOCKS': 'Blocks',
    'ALL': 'All',
    'HASH': 'Hash',
    'FILTER_BY_ADDRESS': 'Filter by address',
    'NO_DATA_AVAILABLE': 'No data available',
    'LOADING': 'Loading',
    'WEAK_SEED': 'Weak seed!',
    'YOUR_SEED_MUST_CONTAIN': 'Your seed must comply with the following rules:',
    'YOUR_SEED_MUST_CONTAIN1': '- at least 1 upper case letter',
    'YOUR_SEED_MUST_CONTAIN2': '- at least 1 digit',
    'YOUR_SEED_MUST_CONTAIN3': '- at least 1 special character',
    'YOUR_SEED_MUST_CONTAIN4': '- minimum 10 characters long',
    'YOUR_SEED_MUST_CONTAIN5': '- maximum 100 characters long',
    'EXECUTE': 'Execute',
    'COIN': 'Coin',
    'UPDATE': 'Update',
    'IMPORT': 'Import',
    'CHECK': 'Check',
    'VALIDATE': 'Validate',
    'COPY_TO_CLIPBOARD': 'Copy to clipboard',
    'RESTART': 'Restart',
    'WALLET_INFO': 'Wallet Info',
    'ADD_COIN': 'Add Coin',
    'STOP': 'Stop',
    'START': 'Start',
    'ACTIVE_ADDRESS': 'active address',
    'NO_DATA': 'No history available',
    'LOADING_HISTORY': 'Loading transaction history',
    'CLOSE': 'Close',
    'SHOW': 'Show',
    'SHOWING': 'Showing',
    'OF': 'of',
    'TO_ALT': 'to',
    'SEARCH': 'Search',
    'PREVIOUS': 'Previous',
    'NEXT': 'Next',
    'ENTRIES_SM': 'entries',
    'SELECT_A_COIN': 'Select Coin to add to Agama Wallet',
    'WALLETS': 'Wallets',
    'ACTIVATE_COIN': 'Activate Coin',
    'WELCOME_PLEASE_ADD': 'Welcome. Please add a coin to start.',
    'SELECT_SEED_TYPE': 'Please select compatible wallet seed type',
    'SELECT': '-Select-',
    'CLOSE': 'Close',
    'PLEASE_USE': 'Please use either',
    'OR': 'or',
    'TO_USE': 'to use',
    'WELCOME_LOGIN': 'Welcome. Please login',
    'WALLET_SEED': 'Wallet Seed / WIF',
    'SIGN_IN': 'Sign in',
    'CREATE_WALLET': 'Create new wallet',
    'LOGIN_ANOTHER_WALLET': 'Login to another wallet',
    'CONFIRM_SEED': 'Confirm Wallet Seed',
    'REGISTER': 'Register',
    'BACK_TO_LOGIN': 'Back to Login',
    'TOGGLE_NAV': 'Toggle navigation',
    'TOGGLE_SEARCH': 'Toggle Search',
    'TOGGLE_MENUBAR': 'Toggle menubar',
    'SETTINGS': 'Settings',
    'LOGOUT': 'Logout',
    'DASHBOARD': 'Dashboard',
    'WALLET_SETTINGS': 'Wallet Settings',
    'ACTIVE_COINS': 'Active Coins',
    'TRANSACTIONS': 'Transactions',
    'SEND': 'Send',
    'RECEIVE': 'Receive',
    'BUNDLES': 'Bundles',
    'BALANCES': 'Balances',
    'BALANCE': 'Balance',
    'VALIDATED': 'Validated',
    'ADDRESS': 'Address',
    'MY': 'My',
    'COPY': 'copy',
    'INTEREST_EARNED': 'Rewards Earned',
    'TOTAL_BALANCE': 'Total Balance',
    'GET_BALANCE': 'Get Balance',
    'REFRESH': 'Refresh',
    'LIST_UNSPENT': 'List Unspent',
    'LIST_TRANSACTIONS': 'List Transactions',
    'TRANSACTION_HISTORY': 'Transactions History',
    'DIRECTION': 'Direction',
    'CONFIRMATIONS': 'Confirmations',
    'AMOUNT': 'Amount',
    'TIME': 'Time',
    'DEST_ADDRESS': 'Dest. Address',
    'TX_DETAIL': 'Tx Detail',
    'FILL_SEND_FORM': 'Fill Send Form',
    'FILL_SEND_DETAILS': 'Fill sending transaction details',
    'CONFIRMING': 'Confirming',
    'CONFIRM_DETAILS': 'Confirm if details are correct',
    'PROCESSING_TX': 'Processing Tx',
    'PROCESSING_DETAILS': 'Processing and showing details',
    'SEND_FROM': 'Send From',
    'SEND_TO': 'Send To',
    'FEE': 'Fee',
    'TOTAL': 'Total',
    'AMOUNT_SM': 'amount',
    'TO': 'To:',
    'FROM': 'From:',
    'CONFIRM': 'Confirm',
    'BACK': 'Back',
    'TRANSACTION_RESULT': 'Transaction Result',
    'KEY': 'Key',
    'VALUE': 'Value',
    'INFO': 'Info',
    'MAKE_ANOTHER_TX': 'Make Another Transaction',
    'RECEIVING_ADDRESS': 'Receiving Addresses',
    'TYPE': 'Type',
    'INTEREST': 'Rewards',
    'INTEREST_EARNED': 'Rewards Earned',
    'STATUS': 'Status',
    'RESULT': 'Result',
    'WALLET_INFO': 'Wallet Info',
    'WALLET_VERSION': 'Wallet Version',
    'UNCONFIRMED_BALANCE': 'Unconfirmed Balance',
    'INFO': 'Info',
    'VERSION': 'Version',
    'BLOCKS': 'Blocks',
    'DIFFICULTY': 'Difficulty',
    'PAY_TX_FEE': 'Pay Transaction Fee',
    'ERRORS': 'Errors',
    'FIAT_CURRENCY': 'Fiat Currency',
    'EXPORT_KEYS': 'Export Keys',
    'ONLY_ACTIVE_WIF_KEYS': 'Only the active coin wallet WIF keys will be shown here.<br>' +
                            'You can use these WIF keys to import to another coin wallets.',
    'PLEASE_KEEP_KEYS_SAFE': 'Please keep these keys extra safe and secure.',
    'PASSPHRASE': 'Passphrase',
    'GET_WIF_KEYS': 'Get WIF Keys',
    'INFO': 'Info',
    'ENTER': 'Enter',
    'ADDR_SM': 'address',
    'QRCODE': 'Show QR code',
    'SCAN_QR_CODE': 'Scan QR Code',
    'SCAN_QRCODE_WEBCAM': 'Scan QR Code with webcam',
    'TOGGLE_ZERO_ADDRESSES': 'Toggle empty addresses',
    'NEXT_PAGE': 'Next Page',
    'PREVIOUS_PAGE': 'Previous Page',
    'CREATE_INVOICE': 'Create Invoice',
    'CREATE_INVOICE_QR': 'Create Invoice QR Code',
    'QR_CONTENT': 'QR Content',
    'CHOOSE_RECEIVING_ADDRESS': 'Choose Address',
    'SAVE_AS_IMAGE': 'Save as Image',
    'OPEN_TRANSACTION_IN_EPLORER': 'Open transaction in @template@ Explorer',
  },
  'ADD_COIN': {
    'SAVE_SELECTION': 'Save Selection',
    'LOAD_SELECTION': 'Load Selection',
    'ACTIVATE_ALL': 'Activate all',
    'ADD_ANOTHER_COIN': 'Add another coin',
    'ALREADY_ADDED': 'is already added',
    'COIN_ALREADY_ADDED': 'Coin already added',
    'IN': 'in',
    'MODE': 'mode',
    'CRYPTO_CURRENCIES': 'Crypto Currencies',
    'ASSETCHAINS': 'Assetchains',
    'LITE': 'Lite',
    'LITE_MODE_DESC': 'Lite mode doesn\'t require any blockchain to be loaded locally. All data is requested on demand from Electrum servers. Lite mode has higher network latency compared to native mode.',
  },
  'DASHBOARD': {
    'SHOW_ALL_ADDR': 'Show all addresses',
    'REMOVE': 'Remove',
    'SOFT_LOGOUT': 'Soft logout',
    'COMPLETE_LOGOUT': 'Complete logout',
    'GENERATE_SM': 'generate',
    'RECEIVE_ADDR_COPIED': 'address copied to clipboard',
    'SERVER_SM': 'server',
    'IS_UNREACHABLE': 'is unreachable',
    'SERVER_SET_TO': 'server is set to',
    'SPV_AUTO_SWITCH': 'Trying to switch to another server',
    'HOW_TO_SWITCH_MANUALLY': 'How to switch manually',
    'SELECT_ADDRESS': '- Select Address -',
    'SEND_TOADDR_REQ': 'To Address is required.',
    'SEND_FROMADDR_REQ': 'From Address is required.',
    'SEND_AMOUNT_REQ': 'Please enter amount to send.',
    'SEND_FEE_REQ': 'Make sure you have fee entered. Default value is',
    'SEND_TOTAL_REQ': 'Make sure you have both amount and fee entered to calculate final total.',
    'SEND_TX_PROGRESS': 'The transaction submitted is processing. Once processed the transaction details will be displayed here.',
    'SUBTRACT_FEE': 'Subtract fee from amount',
    'UNKNOWN': 'Unknown',
    'IN': 'IN',
    'OUT': 'OUT',
    'MINED': 'Mined',
    'IMMATURE': 'Immature',
    'ZADDR_NOT_LISTED': 'Z Address not listed by wallet',
    'ADDR_COPIED': 'Address Copied',
    'QR_ERR_NO_VIDEO_DEVICE': 'Error: No video input devices found!',
    'QR_ERR_UNKNOWN': 'Error: unknown error!',
    'SPV_CONN_ERROR': 'Connection error!',
    'SPV_CONN_ERROR_P1': 'Go to "Settings", select "SPV Server List" tab, choose new server and click "OK".',
    'SPV_CLAIMED_INTEREST': 'Claimed rewards',
    'CLAIM_INTEREST_HELPER_BAR_P1': 'You have',
    'CLAIM_INTEREST_HELPER_BAR_P2': 'to claim',
    'CLAIM_INTEREST_HELPER_BAR_P3': 'Claim now',
    'CLAIM_INTEREST_HELPER_BAR_ALT_P1': 'You don\'t have any rewards to claim',
    'CLAIM_INTEREST_HELPER_BAR_ALT_P2': 'Check UTXO',
    'SEARCH': 'Search',
    'CURRENT_BLOCK_SM': 'current block',
  },
  'TOASTR': {
    'ERROR': 'Error',
    'COIN_UNABLE_TO_STOP': 'Unable to stop @template@. Try again.',
    'COIN_IS_REMOVED': 'is removed',
    'TXID_COPIED': 'Transaction ID copied',
    'CLAIM_INTEREST_BALANCE_SENT_P1': 'Your full balance is sent to address',
    'CLAIM_INTEREST_BALANCE_SENT_P2': 'Check back your new balance in a few minutes.',
    'SETTINGS_RESET': 'Settings are reset to default',
    'SETTINGS_SAVED': 'Settings are saved',
    'TRANSACTION_FAILED': 'Transaction failed',
    'WALLET_NOTIFICATION': 'Wallet Notification',
    'ACCOUNT_NOTIFICATION': 'Account Notification',
    'COIN_NOTIFICATION': 'Coin Notification',
    'TX_NOTIFICATION': 'Transaction Notification',
    'SERVICE_NOTIFICATION': 'Service Notification',
    'LOGIN_NOTIFICATION': 'Login Notification',
    'SETTINGS_NOTIFICATION': 'Settings Notification',
    'MODE': 'Mode',
    'LOOKS_LIKE': 'Looks like',
    'ALREADY_RUNNING': 'already running',
    'STARTED_IN': 'started in',
    'COIN_STARTED': 'coin started',
    'ADDED_TO': 'added to',
    'SUCCESSFULLY': 'Successfully',
  },
  'IAPI': {
    'PUBLIC_SM': 'public',
  },
  'LOGIN': {
    'SEED_TRAILING_CHARS': 'Your seed contains leading/trailing space characters',
    'SPV_MODE_DESC_P1': 'If you need a quick and easy access to your funds try',
    'SPV_MODE_DESC_P2': 'Lite (SPV) mode',
    'SPV_MODE_DESC_P3': 'which doesn\'t require any blockchain to be loaded locally.',
    'SPV_MODE_DESC_P4': 'All data is requested on demand from Electrum servers.',
    'SEED_QR_RECOVERY': 'Seed QR recovery',
    'QR_SCAN_ERR_DESC': 'Unable to recognize QR code',
    'QR_SCAN_ERR': 'QR scan Error',
    'OR_USE_A_SHORTCUT': 'or use a shortcut',
    'PIN_LOGIN_INFO': 'You can login be entering a login seed or by selecting a pin',
    'SAVED_WALLET_SEED': 'Have you saved your wallet seed?',
    'SEED_MAKE_SURE_BACKUP': 'Make sure you have it backed up. Without this seed you won\'t be able to access your wallet in the future!',
    'YES_I_BACKUP': 'Yes, I have taken backup.',
    'CANCEL': 'Cancel',
    'UNLOCK': 'Unlock',
    'SIGN_IN': 'Sign In',
    'WELCOME': 'Welcome',
    'ENTER_VALUE_AGAIN': 'Please enter the same value again',
    'CUSTOM_WALLET_SEED': 'Custom wallet seed',
    'MUST_ENTER_SEED': 'You must enter a seed',
    'INVALID_SEED': 'Invalid Seed',
    'SEED_NOT_OF_TYPE': 'The inserted seed is not of type',
    'IGUANA_SEED': 'Iguana (256 bits)',
    'WAVES_SEED': 'Waves',
    'NXT_SEED': 'NXT',
    'SEED_COPIED': 'Seed copied',
    'SEED_SUCCESSFULLY_COPIED': 'The seed was successfully copied',
    'ENCRYPT_SEED': 'Encrypt login seed',
    'PUBKEY': 'pubkey',
    'ENCRYPT_KEY': 'Encrypt key',
    'DECRYPT_KEY': 'Decrypt key'
  },
  'SETTINGS': {
    'SPV_SERVER_SET': 'SPV server set to',
    'SPV_SERVER': 'SPV server',
    'OR_WIF': 'or WIF key',
    'KEY_IS_NOT_FOUND': 'Key is not found',
    'ADDRESSES_SM': 'addresses',
    'ACCOUNT_SM': 'account',
    'ACCOUNTS_SM': 'accounts',
    'GET_KEY': 'Get key',
    'BIP39_DISC': 'Hardware wallets disclaimer: by using this form you\'re acknowledging risks of exposing your seed',
    'BIP39_DESC_P1': 'Description: the form below is going to search for a pub key depending on a range of key path combinations is chosen (No of accounts * account address path depth).',
    'BIP39_DESC_P2': 'The app might temporary freeze for several seconds during search procedure.',
    'SHOW_APP_RUNTIME_LOG': 'Show app runtime log',
    'WRONG_PASSPHRASE': 'Wrong passphrase',
    'SPV_SERVER_LIST_DESC': 'Server list selection is only available for active coins that have more than 1 server to connect to.',
    'SPV_SERVERS': 'SPV servers list',
    'SPV_SINGLE_SERVER_NOTICE': 'There is only one electrum server available. SPV verification is coming from the same server providing all remote data.',
    'RESET_TO_DEFAULT': 'Reset to default',
    'PROGRESS': 'Progress',
    'SUPPORT': 'Support',
    'SUPPORT_TICKETS': 'Support tickets',
    'GET_DISCORD_INVITE': 'Get Discord invite',
    'ADDRESS_LIST': 'Address',
    'PASSPHRASE_REQ': 'Passphrase is required.',
    'SAVE_APP_CONFIG': 'Save app config',
    'APP_CONFIG': 'App Config',
    'EXPORT_KEYS_NOTE': 'Note: it\'s important that you provide the same passphrase you used to login to the wallet!',
  },
  'TX_INFO': {
    'ADDRESS': 'address',
    'AMOUNT': 'amount',
    'CATEGORY': 'category',
    'CONFIRMATIONS': 'confirmations',
    'TXID_INFO': 'TxID Info',
    'HEX': 'Hex',
    'RAW_INFO': 'Raw info',
  },
  'SEND': {
    'CLOCK_OUT_OF_SYNC': 'Your local clock is not set properly. This will prevent sending a KMD transaction.',
    'SEND_ERR_ZTX_P1': 'Your history contains shielded transactions(z).',
    'SEND_ERR_ZTX_P2': 'Please move funds to another transparent address in order to use Lite mode.',
    'TO_SM': 'to',
    'TOTAL': 'Total (amount + transaction fee)',
    'REWARDS_SM': 'rewards',
    'TOTAL_DESC': 'Max. available amount to spend - transaction fee',
    'ADJUSTED_AMOUNT': 'Adjusted amount',
    'SATS_SM': 'sats',
    'FEE': 'Fee',
    'FETCHING_BTC_FEES': 'Fetching BTC fees',
    'FEE_PER_KB': 'per KB',
    'FEE_PER_BYTE': 'Fee per byte',
    'BTC_EST_PREDICTION': 'Estimated to be included within the next',
    'ADVANCED_SELECTION': 'Advanced selection',
    'CONF_TIME': 'Confirmation time',
    'BTC_FEES_DESC_P1': 'Electrum based fee estimates may not be as accurate as bitcoinfees.earn.com.',
    'BTC_FEES_DESC_P1': 'It is advised to use fast/average/slow options if you want your transaction to be confirmed within 60 min time frame.',
    'BTC_FEES_DESC_P3': 'Estimates are based on bitcoinfees.earn.com data.',
    'BTC_FEES_DESC_P4': 'Around 90% probability for a transaction to be confirmed within desired time frame.',
    'BTC_FEES_FETCH': 'BTC fees fetch',
    'UNABLE_TO_GET_BTC_FEE_RATES': 'Unable to get BTC fee rates',
    'SELF': 'Self',
    'ALL': 'All',
    'BAD_TXN_SPENT_ERR1': 'This particular error can happen in the following cases:',
    'BAD_TXN_SPENT_ERR2': 'Your machine\'s clock is not set properly',
    'BAD_TXN_SPENT_ERR3': 'SPV server is temporary out of sync. Try to switch over to another one.',
    'BAD_TXN_SPENT_ERR4': 'Double spend in case you just made another transaction',
    'MIN_AMOUNT_IS': 'min @template@ amount is',
    'AMOUNT_IS_TOO_SMALL': 'Amount @template@ is too small',
    'MAX_AVAIL_BALANCE': 'max available balance is',
    'TXID_COPIED': 'TXID copied to clipboard',
    'RESULT': 'Result',
    'PROCESSING_TX': 'Processing transaction',
    'TRANSACTION_ID': 'Transaction ID',
    'SUCCESS_SM': 'success',
    'WARNING': 'Warning',
    'WARNING_SPV_P1': 'your wallet data is verified only by a single server!',
    'WARNING_SPV_P2': 'If you still want to continue press "Confirm".',
    'SPV_VERIFYING': 'Verifying transaction data',
    'UPDATE': 'Update',
    'ENTER_ADDRESS': 'Enter address',
    'AMOUNT_POSITIVE_NUMBER': 'Amount must be a positive number',
    'INSUFFICIENT_FUNDS': 'You don\'t have the necessary funds to make this transaction',
    'QR_COIN_MISMATCH_MESSAGE_IMPORT_COIN': 'QR code had coin ',
    'QR_COIN_MISMATCH_MESSAGE_ACTIVE_COIN': '. You have ',
    'QR_COIN_MISMATCH_MESSAGE_END': ' active in your wallet. Please, check that you have same coin active that you try to import!',
    'QR_COIN_MISMATCH_TITLE': 'Coin Mismatch',
  },
  'ASSETCHAINS': {
    'BET': 'BET',
    'BOTS': 'BOTS',
    'CEAL': 'CEAL NET',
    'COQUI': 'COQUI',
    'CHAIN': 'Chainmakers',
    'GLXT': 'GLXToken',
    'EQL': 'Equaliser',
    'CRYPTO': 'CRYPTO',
    'HODL': 'HODL',
    'DEX': 'DEX',
    'JUMBLR': 'JUMBLR',
    'KV': 'KV',
    'MGW': 'MultiGateway',
    'MVP': 'MVP Lineup',
    'MNZ': 'Monaize',
    'PANGEA': 'PANGEA',
    'REVS': 'REVS',
    'MSHARK': 'MSHARK',
    'MESH': 'SpaceMesh',
    'SUPERNET': 'SUPERNET',
    'WLC': 'WIRELESS',
    'AXO': 'AXO',
    'ETOMIC': 'ETOMIC',
    'BTCH': 'BTCH',
    'BEER': 'BEER (Test coin)',
    'PIZZA': 'PIZZA (Test coin)',
    'VOTE2018': 'VOTE2018 (Notary Elections)',
    'NINJA': 'NINJA',
    'GLXT': 'GLXToken',
    'BNTN': 'Blocnation',
    'PRLPAY': 'Pearl Pay',
    'OOT': 'Utrum',
    'ZILLA': 'ChainZilla',
    'DSEC': 'DevSec',
    'VRSC': 'VerusCoin',
  },
  'CRYPTO': {
    'KMD': 'Komodo',
    'CHIPS': 'Chips',
    'FTC': 'FeatherCoin',
    'GBX': 'GoByte',
    'EMC2': 'Einsteinium',
    'XZC': 'Zcoin',
    'FJC': 'Fujicoin',
    'GAME': 'GameCredits',
    'BCBC': 'Bitcoin CBC',
    'BTG': 'BitcoinGold',
    'BCH': 'BitcoinCash',
    'BTC': 'Bitcoin',
    'DASH': 'Dash',
    'DNR': 'Denarius',
    'DGB': 'DigiByte',
    'FAIR': 'Faircoin',
    'ARG': 'Argentum',
    'LTC': 'Litecoin',
    'MONA': 'Monacoin',
    'NMC': 'Namecoin',
    'VTC': 'Vertcoin',
    'VIA': 'Viacoin',
    'SIB': 'Sibcoin',
    'BLK': 'Blackcoin',
    'DOGE': 'Dogecoin',
    'ZEC': 'Zcash',
    'HUSH': 'Hush',
    'SNG': 'SnowGem',
    'ZCL': 'Zclassic',
    'XMY': 'Myriad',
    'HODLC': 'Hodl coin',
    'BTX': 'Bitcore',
    'QTUM': 'Qtum',
    'BTCZ': 'BitcoinZ',
  },
  'RISKS_MODAL': {
    'DESC_P1': 'This wallet is a web-based interface that allows you to use',
    'DESC_P2': 'and other Komodo chains',
    'DESC_P3': 'without running a full @template@ node. However, because this convenience comes at a cost: it is extremely difficult for Agama to securely deliver its code to your browser. This means that there is considerable risk in using Agama web wallet for large amounts!',
    'DESC_P4': 'It is recommended that you treat Agama web as you would treat your actual wallet, and not store very large amounts in it. For long-term storage of @template@ and any other cryptocurrency you should create a cold wallet.',
  },
};

export default LANG_EN;