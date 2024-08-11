type TableWithId<Table> = Omit<Table, "id"> & { id: number };

export default TableWithId;