import"../component/Profile.css"
const Profile=()=>{
    return(
        <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li class="profile-item">
                            <span>Name</span>
                            sayed khalil
                        </li>
                        <li class="profile-item">
                            <span>Birthday</span>
                            9/5/1986
                        </li>
                        <li class="profile-item">
                            <span>Address</span>
                            domtetta
                        </li>
                        <li class="profile-item">
                            <span>Phone</span>
                            01280973534
                        </li>
                        <li class="profile-item">
                            <span>Email</span>
                           sayedkhalil992@gmail.com
                        </li>
                        <li class="profile-item">
                            <span>Website</span>
                            <span class="web">sayed-des.com</span>
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Profile