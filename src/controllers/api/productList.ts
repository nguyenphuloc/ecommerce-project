import axiosClient from './axiosClient'
import { ListParams, ListResponse, IProductState, IProductItem } from 'models'

const productsApi = {
    getProductsList(params: ListParams): Promise<ListResponse<IProductState>> {
        const url = '/products'
        return axiosClient.get(url, { params })
    },
    getById(id: string): Promise<IProductItem> {
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
    add(data: IProductItem): Promise<IProductItem> {
        const url = '/products'
        return axiosClient.post(url, data)
    },
    update(data: IProductItem): Promise<IProductItem> {
        const url = `/products/${data.id}`
        return axiosClient.patch(url, data)
    },
    remove(id: string): Promise<string> {
        const url = `/products/${id}`
        return axiosClient.delete(url)
    },
}

export default productsApi;