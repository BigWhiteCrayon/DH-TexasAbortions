
import './App.css';
import ClinicMap from './ClinicMap'
import Blogs from './Blogs'
import AdventureForm from './AdventureForm'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <header className="Title">How Hard has Getting an Abortion Been in Texas</header>
        <header className="Subtitle">and Why is that so Hard to Answer</header>
      </ div>
      <div className="TopCard">
        <header className="Subtitle">The Change in Abortion Availabilty through the Years</header>
        <div className="Divider" />
        <text className="bodyText">We wanted to look at how the number of clinics available to women has fluctuated throughout the years in Texas. To do this we found snapshots though the years surrounding pivotal events in a woman’s ability to seek out an abortion. This includes the first clinic in Dallas in 1973, the years surrounding the contentious enactment of HB2 and the subsequent repeal, and the reality of the current day.  In an effort to show how this effects women of different backgrounds, we included a toggleable overlay displaying the median household income per county and the ability to see a 100 mile and 200 mile radius around each  clinic to see the distances some women in Texas may have traveled for a federally ensured right.</text>
        <ClinicMap />
        </div>
        <div className="Card">
        <header className="Subtitle">The Steps They Took</header>
        <div className="Divider" />
        <text className="bodyText">Women seeking abortion in Texas face numerous
              obstacles in their efforts to safely terminate a pregnancy. The following quiz highlights some of the difficulties they have faced and puts you, the user in their shoes. If you were suffering from an unwanted pregnancy, would you be able to safely and successfully get an abortion?</text>
        <AdventureForm />
        </div>
        <Blogs />
    </div>
  );
}

export default App;
