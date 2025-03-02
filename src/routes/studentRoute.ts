import { Router } from 'express';
import { getStudents, showAddForm, addStudent, showEditForm, updateStudent, deleteStudent } from '../controller/studentController';

const router = Router();

router.get("/", getStudents);
router.get("/add", showAddForm);
router.post("/add", addStudent);
router.get("/edit/:id", showEditForm);
router.post("/edit/:id", updateStudent);
router.get("/delete/:id", deleteStudent);

export default router;