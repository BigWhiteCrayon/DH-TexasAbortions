
import './App.css';
import ClinicMap from './ClinicMap'
import Blogs from './Blogs'
import AdventureForm from './AdventureForm'
import { useMediaPredicate } from 'react-media-hook';

import WhyProj from './blogPosts/WhyProject.md';

import WhatItsLike from './blogPosts/WhatItsLike.md'; 
import DataBlog from './blogPosts/DataBlog.md';
import Legistlation from './blogPosts/Legislation.md';
import Scholars from './blogPosts/Scholars.md'; 
import Future from './blogPosts/Future.md';
import Sources from './blogPosts/Sources.md';

import graph from './sophieGraph.png';

function App() {

  const checkIfNarrow = useMediaPredicate(
    '(min-width: 975px)'
  );
  return (
    <div className="App">
      <Header isNarrow = {checkIfNarrow}/>
      <div className={checkIfNarrow ? "TopCard" : "TopCardNarrow"} />
      <Blogs blogPosts={[WhyProj]}/>  
      <div className="Card">
        <header className="Subtitle">The Change in Abortion Availabilty Through the Years</header>
        <div className="Divider" />
        <i className="Author">Jordan Youngberg</i>
        <div className="bodyText">We wanted to look at how the number of clinics available to women has fluctuated throughout the years in Texas. To do this we found snapshots though the years surrounding pivotal events in a woman’s ability to seek out an abortion. This includes the first clinic in Dallas in 1973, the years surrounding the contentious enactment of HB2 and the subsequent repeal, and the reality of the current day.  In an effort to show how this effects women of different backgrounds, we included a toggleable overlay displaying the median household income per county and the ability to see a 100 mile and 200 mile radius around each  clinic to see the distances some women in Texas may have traveled for a federally ensured right.</ div>
        <ClinicMap />
      </div>
      <div className="Card">
        <header className="Subtitle">The Steps They Took</header>
        <div className="Divider" />
        <i className="Author">Sophie Maloney</i>
        <div className="bodyText">Women seeking abortions in Texas have faced numerous obstacles in their efforts to safely terminate pregnancies. Even after abortion became legalized in 1973 in the landmark case Roe. V. Wade, the process of getting an abortion has remained a challenge as legislation shifted with the ever-changing political and social climate. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010782420301116">Prior to legalized abortion, women would often seek underground practitioners at great cost to their health and finances</ a>. Women with financial means to travel outside the country or pay for premium care were able to find safer ways to terminate their pregnancies. <a href="https://www.saturdayeveningpost.com/2019/05/the-years-of-deadly-underground-abortions/">However, the barriers of cost, travel, and location affected women of color and women in lower socioeconomic positions disproportionately</ a>. Following legalization women were granted the care that they needed, but four years after Roe v. Wade, in 1977, <a href="https://lies.tfn.org/">Texas passed a law that allowed hospitals to refuse to provide abortions no matter the reason</ a>. Shortly after this, in 1985, another law was passed that restricted abortions by ruling that only licensed state physicians could provide abortion care. In 1989, one of the key conditions of Roe v. Wade was changed so that <a href="https://pubmed.ncbi.nlm.nih.gov/3353873/">Medicaid would no longer cover abortion unless the mother’s life was in danger</ a>. These restrictive laws limited abortion access to many, and caused women to seek care outside the state, if they were able. Of course only those with financial means and support could afford to travel large distances to get the care that they needed so these laws once again <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010782420301116">affected lower classes and women of color more than the wealthy whites in the state</ a>.</ div>
        <div className="bodyText">Starting in late 1990s onwards different laws aimed at restricting abortion access were introduced at much higher frequencies. The year 2003 saw laws mandating that abortion facilities be performed in licensed hospitals or locations with ambulatory surgical centers for abortions after 16 weeks; this forced providers to upgrade their facilities or close down. The women themselves were required to wait 24 hours before the procedure and read government provided documents that included realistic photos of fetuses; <a href="https://progresstexas.org/blog/4-decades-texas-abortion-laws-2-minutes">these were aimed at convincing women to reject abortions</ a>. Other laws followed in the following years which targeted government contracts with abortion providers and abortion facility funding. Other significant legislature included the passing of HB2 which banned abortions after 20 weeks, required that all abortion providing practices to meet building standards for ambulatory surgical centers, required that doctors have admitting privileges to a hospital within a 30 mile radius of the clinic, and added visitation requirements for women to meet with their physician which again <a href="https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2016.303134">hurt those who could not afford to take time off and travel or meet with doctors repeatedly</ a>. Parts of this bill were <a href="https://www.nytimes.com/2016/06/28/us/supreme-court-texas-abortion.html">later found to be unconstitutional by the Supreme Court</ a> in Whole Woman’s Health v. Hellerstedt. However the impact of this legislation was far reaching; the closures of clinics across the state caused the average number of miles that women had to travel increased to <a href="https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2016.303134">85 miles for those whose local clinics closed</a>. Additionally, for those whose nearest clinic was over 100 miles away the number of abortions between 2012 and 2014 <a href=" https://sites.utexas.edu/txpep/files/2017/01/TxPEP-Infographic-3-map-version.jpg">decreased by 50.3%</ a>. The trend is clear; since abortion was first legalized in 1973, the state has consistently sought to undermine the ruling and <a href="https://lies.tfn.org/">restrict access for women throughout Texas</ a>.</div>
        <div className="bodyText">Interestingly, the timing of these laws suggests a shift in political priorities as there has been much legislature passed since 2000 surrounding abortion where the previous 30 years saw only a few major changes. With more time, the author would like to research this more and add new information to future versions of this site. Below is a timeline of some of the most significant legislature that was passed since Roe v. Wade provided by <a href="https://progresstexas.org/blog/4-decades-texas-abortion-laws-2-minutes">Progress Texas</a>:
</div>
      <img src={graph} alt="graph" className="Graph"/>
        <div className="bodyText">Note that this graph does not include the many bills were introduced but not passed, and is not a comprehensive list of all laws relating to abortion. 
</ div>
        <div className="bodyText">The following questions below outline some of the many barriers that women faced and continue to face today. By placing yourself in these women’s shoes, a better understanding of the complex choices that these women were forced to take themselves can be made clearer. They took steps that many of us have never had to consider; it is time we do before we restrict basic medical care any further. If you were in this situation would you be able to get the care you need?
</ div>
        <AdventureForm />
        <div className="bodyText">So how do the map and questions work together? Both are fundamentally rooted in examining change over time. The map serves as a visual representation of how changing laws and regulations have affected the location and accessibility of abortions, while the quiz takes the reader through the abortion process as someone in that position. Together, they work to form a cohesive picture of what the abortion process has looked like for women in Texas throughout history. </div>
      </div>
      <Blogs blogPosts={[WhatItsLike, DataBlog, Legistlation, Scholars, Future, Sources]}/>
    </div>
  );
}

function Header({isNarrow}){
  return(
      <div className={isNarrow ? "Header" : "HeaderNarrow"}>
        <header className={isNarrow ? "Title" : "TitleNarrow"}>How Hard has Getting an Abortion Been in Texas</header>
        <header className={isNarrow ? "SubtitleHeading" : "SubtitleHeadingNarrow"}>And Why is That so Hard to Answer</header>
      </ div>
  )
}
export default App;
