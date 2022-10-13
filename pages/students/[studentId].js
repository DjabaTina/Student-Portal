import React from "react";
import { getStudents } from "../../utils/getStudents";



export async function getServerSideProps(context) {
  let student = {};
  try {
    student = await getStudents(context.params.studentId);
  } catch (error) {}

  return {
    props: {
      student,
    },
  };
}

const studentDetails = ({ student }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p></p>
    </div>
  );
};

export default studentDetails;
