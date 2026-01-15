import { Router } from "express"
import { createRecipe, deleteRecipe, getRecipeById, getRecipes, searchRecipes, updateRecipe } from "../controllers/recipesController.js"

const router = Router()

router.get("/", getRecipes)
router.get("/:id", getRecipeById)
router.post("/",createRecipe)
router.put("/:id",updateRecipe)
router.delete("/:id",deleteRecipe)
router.get("/:name",searchRecipes)

export default router
