import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const { email } = req.body;

    const student = await Student.findOne({ where: { email } });

    if (student) {
      return res.status(400).json({ error: 'Student already registered!' });
    }

    const { id, name } = await Student.create(req.body);

    return res.status(201).json({
      id,
      name,
      email,
    });
  }
}

export default new StudentController();
