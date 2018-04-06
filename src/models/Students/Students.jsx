class Students
{
    constructor() {
        this.students = [
            {
                "id": 1,
                "name": "Nguyen Quang Chien",
                "age": 22,
                "email": "s3520920@rmit.edu.vn",
                "nationality": "Vietnam"
            }
        ];
    }
    
    show() {
        return this.students;
    }

    find(id) {
        return this.students.filter(student => student.id === id);
    }

    add(data) {
        data.id = this.students.length + 1;
        this.students.push(data);
        return this.students;
    }

    update(id, data) {
        this.students[id-1] = data;
        return this.students;
    }

    delete(id) {
        this.students.splice(id-1, 1);
        return this.students;
    }
}

export default Students;