import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Leto Token Exchange dApp",
    chainId: "galileo-4",
    createdDate: "2025-01-03T00:14:01.028Z",
    modifiedDate: "2025-01-03T00:14:01.028Z",
    id: "andromeda",
    collections: [
        {
            exchange: "andr14cex0zsnnaddercdp54un4gpaerrlw0jgve9whlafhjn9accdcjs9t32nj",
            cw20: "andr1crr907r5y0y3r0jhjj5m60hymxhkdpzl2r25e3xxj0a7k53nr5mq3nkuw5",
            name: "Leto Token Exchange dApp",
            type: ICollectionType.EXCHANGE,
            id: "exchange"
        }
    ],
};

export default CONFIG;
