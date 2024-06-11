import * as itemModel from '../models/itemModel.js'

const getAllItem = async(req, res) => { //모델에 있는 함수를 호출하고 결과를 가져와서 뷰에 전달함 (여기서는 웹브라우저에 뿌리는 것으로 함.)
    const items = await itemModel.getAllItem();
    res.json(items);
}

const createItem = async(req, res) => {
    await itemModel.createItem(req.body)
}

const getItemById = async(req, res) => {
    const item = await itemModel.getItemById(req.params.id)
    res.json(item);
}

const updateItem = async(req, res) => {
    await itemModel.updateItem(req.params.id, req.body)
    res.send("Item updated");
}

const deleteItem = async(req, res) => {
    await itemModel.deleteItem(req.params.id)
    res.send("Item deleted");
}

export {getAllItem, createItem, getItemById, updateItem, deleteItem}