import pdf from "../assets/doc/resume.pdf"

export const Team = () => {
return (
  <>
  <div className="down" id="resume">Download My Resume by clicking on this button
  <div ><a href={pdf} download="Aryanresume.pdf" className="resanc"><button class="button-87" role="button">Hit me to download!</button></a></div>
  </div>
  </>
)
}
