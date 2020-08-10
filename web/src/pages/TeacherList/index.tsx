import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import './styles.css';


function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={ searchTeachers }>
        <Select 
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={event => {setSubject(event.target.value)}}
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Física', label: 'Física' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Química', label: 'Química' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Português', label: 'Português' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'Educação física', label: 'Educação física' },
            { value: 'Sociologia', label: 'Sociologia' },
            { value: 'Filosofia', label: 'Filosofia' },
          ]}
          />

          <Select 
            name="week_day"
            label="Dia da semana" 
            value={week_day}
            onChange={event => {setWeekDay(event.target.value)}}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input 
          type="time" 
          label="Hora" 
          name="time"
          value={time}
          onChange={event => {setTime(event.target.value)}}
          />

          <button type="submit">
            Buscar
          </button>
          
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}
      </main>
    </div>
    )
}

export default TeacherList;