import { ICityWeather } from "../../../interfaces/ICityWeather";

export interface IHeader {
    onSearch?(searchText: string): Promise<void>;
    onBack?(): void;
    onLike?(city: ICityWeather): void;
}