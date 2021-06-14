export interface IHeader {
    onSearch(searchText: string): Promise<void>;
}