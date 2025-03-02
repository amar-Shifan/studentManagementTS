import mongoose from "mongoose";

interface IStudent {
    name: string , 
    age: number,
    grade: string
}

const studentSchema = new mongoose.Schema<IStudent>({
    name: {type : String , required: true},
    age: { type : Number , required: true},
    grade: { type: String , required: true}
});

const studentModel = mongoose.model<IStudent>('Student' , studentSchema);

export default studentModel;