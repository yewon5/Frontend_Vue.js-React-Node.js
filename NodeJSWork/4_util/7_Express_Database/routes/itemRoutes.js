import { Router } from 'express';
import * as itemCotroller from '../controllers/itemController.js'

//객체 준비
const router = Router();

router.get("/", itemCotroller.getAllItem) 
router.post("/", itemCotroller.createItem)
router.get("/:id", itemCotroller.getItemById) 
router.put("/:id", itemCotroller.updateItem) 
router.delete("/:id", itemCotroller.deleteItem) 

// 콜백함수를 준비해야해서 괄호 붙이면 안 됨. 
// 경로는 app.js app.use("/api/items", itemRoutes)와 중복되기때문에 /로 사용한다.

export default router;