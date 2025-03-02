import exp from 'constants';
import Student from '../model/studentModel';
import {Request , Response} from 'express';

export const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.find();
        res.render("index", { students });
    } catch (error) {
        res.status(500).send("Error fetching students");
    }
};

export const showAddForm = async(req: Request , res: Response) => {
    res.render('add-student');
}

export const addStudent = async(req: Request , res: Response)=>{
    try {
        
        const {name , age , grade} = req.body;
        await new Student({name , age , grade}).save();
        res.redirect('/');

    } catch (error) {
        res.status(500).send('Error adding Student');
    }
}


export const showEditForm = async(req: Request , res: Response)=>{
    try {

        const student = await Student.findById(req.params.id)
        res.render('edit-student' , {student});

    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}

export const updateStudent = async(req: Request ,res: Response)=> {
    try {

        await Student.findByIdAndUpdate(req.params.id , req.body);
        res.redirect('/');

    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}

export const deleteStudent = async(req: Request , res: Response) => {
    try {
        
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/')

    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}