export declare namespace Models {
    type Settings = {
        [key: string]: any;
    };

    type User<Settings extends Models.Settings> = {
        _id: string;
        name: string;
        // TODO
        settings: Settings;
    }
}