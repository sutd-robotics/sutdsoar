<template>
  <div>
    <stage :disable-particles="disableParticles" />

    <home-section id="about" image="firmware.svg" alternative>
      <a name="about"></a>
      <div :class="$style.about" ref="about">
        <span :class="$style.bigspan">About Us</span>
        <!-- <span :class="$style.smallspan">About Us</span> -->
      </div>
      <vue-headline level="3">Who We Are</vue-headline>
      <p :class="$style.aboutpara">
        SUTD Organization of Autonomous Robotics (SOAR) focuses on autonomous robotics platforms, as well as AI and
        machine learning frameworks.
      </p>
      <br />
      <p :class="$style.aboutpara">
        We aim to nurture a committed robotics community through impactful projects and member development. The club
        adopts Robot Operating System (ROS) as the main robotics middleware framework to keep pace with industry demands
        as well as to ensure that our projects are cross-compatible and hardware-agnostic.
      </p>
      <br />
      <p :class="$style.aboutpara">
        SOAR has grown rapidly in the 4 short years, gaining industry recognition in the form of a sponsorship from
        Lionsbot in 2018. We aim to groom and nurture young robotics engineers who are well-rounded and can tackle a
        variety of real-world robotics challenges. On top of this, SOAR is active in keeping pace with the industry's
        appetite through our involvement in events such as Makerfaire Singapore and Singapore Robo Expo. Our members
        find part-time employment with industry too!
      </p>
      <br />
      <p :class="$style.aboutpara">
        While we are a very niche club, we welcome people of any background to come and join us on this journey. We
        believe that robotics should be accessible to everyone and host regular workshops to impart skills and
        knowledge. In addition, we take on a variety of robotics projects to build our members' skills and club
        capabilities.
      </p>
      <br />
      <p :class="$style.aboutpara">
        Interested in joining SOAR? Drop us an email
        <a href="mailto:soar@club.sutd.edu.sg">here</a> and we will be in touch!
      </p>
    </home-section>

    <div :class="$style.vision" ref="vision" id="vision">
      <a name="vision"></a>
      <span :class="$style.bigspan">Vision</span>
      <!-- <span :class="$style.smallspan">vision</span> -->
      <p>
        To Nurture A Committed Robotics Community
        <br />Through Impactful Projects and Member Development
      </p>
    </div>

    <div :class="$style.title" ref="projects" id="projects">
      <a name="projects"></a>
      <span :class="$style.bigspan">Projects</span>
      <!-- <span :class="$style.smallspan">projects</span> -->
    </div>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="sutdoggo.jpg" title="SUTDoggo">
            <p>
              SOAR constantly seeks to strive for greater heights and
              <a href="https://github.com/sutd-robotics/SUTDoggo">SUTDoggo</a> is the product of the yearning for more.
              Inspired by
              <a href="https://github.com/Nate711/StanfordDoggoProject">Stanford's open-source quadruped robot</a>, we
              ventured into the realm of legged robots. Despite a small team and a short timeline, the team has managed
              to recreate the iconic backflipping of Stanford's version. The team is currently developing autonomous
              capabilities, leveraging on SOAR's existing expertise in ROS and autonomous robots.
            </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="momobot.png" title="MOMObot">
            <p>
              <a href="https://github.com/methylDragon/momobot">MOMObot</a> was our first foray into autonomous service
              robots 2 years ago and it has become an icon of SOAR. MOMObot is a modular and mobile service ground robot
              that is capable of autonomous localisation, even in crowded environments! Developed to carry payloads of
              up to 50kg, it is a stable autonomous platform for us to develop novel applications for autonomous ground
              robots.
              <br />
              <br />Look out for MOMObot at SUTD's 10th Anniversary TechLaunch celebration in 2019, where it was
              featured on
              <a href="https://www.straitstimes.com/singapore/sutd-to-develop-new-design-and-ai-degree"
                >The Straits Times</a
              >
              and
              <a href="https://youtu.be/4dUrA5PkQEw">Channel News Asia</a>!
            </p>
          </project-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="jessica.jpg" title="Jessica">
            <p>
              Jessica is our in-house robot arm that we engineered to serve coffee! Using ROS and 3D printing
              technologies, we created a robot arm that serves coffee at the push of a button. What started as a budding
              passion project to learn how to build and develop robotic arm platforms has become a cherished member of
              SOAR. Jessica has been showcased by the school for multiple events, including at the MINDEF Innovation
              Symposium 2019 and SUTD Open House. Work still continues as we work to improve Jessica's capabilities.
              Catch us at our next event to see what Jessica can do next!
              <br />
              <br />Check out Jessica being showcased at SUTD's Digital Open House microsite
              <a href="https://openhouse.sutd.edu.sg/">here</a>!
            </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="sauvc.jpg" title="SAUVC">
            <p>
              SOAR actively participates in university level competitions where we are able to benchmark our robots with
              others in the field. The
              <a href="https://sauvc.org/">Singapore Autonomous Underwater Vehicle Competition (SAUVC)</a> is an
              international competition organised by IEEE Singapore, drawing in teams from across the globe. SOAR's 2019
              team emerged top 15 in the competition, despite many challenges facing the all-freshmore team. The team
              has grown leaps and bounds in the past year, and is gearing up for SAUVC 2020 this April. Despite the
              challenging field of underwater robotics, our team has been successful in competing with peers in the
              region - exploring fields such as computer vision, electronics design and acoustics.
            </p>
          </project-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

    <div :class="$style.title" ref="team" id="team">
      <a name="team"></a>
      <span :class="$style.bigspan">The Team</span>
      <!-- <span :class="$style.smallspan">the team</span> -->
    </div>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="suriya.jpg"
            title="Suriya"
            info="President"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="KangZhao.jpg"
            title="Kang Zhao"
            info="Vice-President"
            link="https://github.com/iangohy"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="weiqing.jpg"
            title="Michael"
            info="Secretary"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card image="joel.jpg" title="Joel Tay" info="Treasurer" link="https://github.com/Vemrthiss"></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="chunhui.jpg"
            title="Eugenie Alana"
            info="Programme Director"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="boonpin.jpg"
            title="Yap Boon Pin"
            info="Projects Manager"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="abram.jpg"
            title="Suriya"
            info="President"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="ian.jpg"
            title="Kang Zhao"
            info="Vice-President"
            link="https://github.com/iangohy"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="weiqing.jpg"
            title="Michael"
            info="Secretary"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row> <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="abram.jpg"
            title="Suriya"
            info="President"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="ian.jpg"
            title="Kang Zhao"
            info="Vice-President"
            link="https://github.com/iangohy"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="weiqing.jpg"
            title="Michael"
            info="Secretary"
            link="https://github.com/sutd-robotics"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

    <div :class="$style.title" ref="family" id="family">
      <span :class="$style.bigspan">The Family</span>
      <!-- <span :class="$style.smallspan">the family</span> -->
    </div>
    <div :class="$style.family">
      <img src="soarfamily.jpg" />
    </div>

    <home-section image="hangout.svg" flip>
      <vue-headline level="3" id="contact">Join Us!</vue-headline>
      <br />
      <vue-headline level="3">
        <a :class="$style.social" href="mailto:soar@club.sutd.edu.sg" target="_blank" rel="noopener">
          <vue-icon-email />
        </a>
        <a :class="$style.social" href="https://github.com/sutd-robotics" target="_blank" rel="noopener">
          <vue-icon-github />
        </a>
        <a
          :class="$style.social"
          href="https://www.linkedin.com/company/sutd-organisation-of-autonomous-robotics"
          target="_blank"
          rel="noopener"
        >
          <vue-icon-linkedin />
        </a>
        <a :class="$style.social" href="https://instagram.com/sutdsoar" target="_blank" rel="noopener">
          <vue-icon-instagram />
        </a>
        <a :class="$style.social" href="https://www.facebook.com/SUTDRobotics" target="_blank" rel="noopener">
          <vue-icon-facebook />
        </a>
      </vue-headline>
      <br />
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import ProjectCard from '@/app/home/components/ProjectCard/ProjectCard.vue';
import TeamCard from '@/app/home/components/TeamCard/TeamCard.vue';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueIconEmail from '@components/icons/VueIconEmail/VueIconEmail.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconLinkedin from '@components/icons/VueIconLinkedin/VueIconLinkedin.vue';
import VueIconInstagram from '@components/icons/VueIconInstagram/VueIconInstagram.vue';
import VueIconFacebook from '@components/icons/VueIconFacebook/VueIconFacebook.vue';

export default {
  metaInfo: {
    title: 'SUTD Organisation of Autonomous Robotics',
    meta: [
      {
        name: 'description',
        content: 'SOAR Website',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },
      { name: 'image', content: 'https://soar.opensutd.org/logo-colored.svg' },

      { name: 'og:url', content: 'https://soar.opensutd.org/' },
      { name: 'og:site_name', content: 'sutdsoar' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'SUTD Organisation of Autonomous Robotics',
      },
      {
        name: 'og:description',
        content: 'SOAR Website',
      },
      { name: 'og:image', content: 'https://soar.opensutd.org/logo-colored.svg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@jamestiotio' },
      {
        name: 'twitter:title',
        content: 'SUTD Organisation of Autonomous Robotics',
      },
      { name: 'twitter:url', content: 'https://soar.opensutd.org' },
      { name: 'twitter:image', content: 'https://soar.opensutd.org/logo-colored.svg' },
      {
        name: 'twitter:description',
        content: 'SOAR Website',
      },

      { name: 'application-name', content: 'SUTD Organisation of Autonomous Robotics Website' },
      { name: 'apple-mobile-web-app-title', content: 'SUTD Organisation of Autonomous Robotics Website' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: 'https://soar.opensutd.org/icon-144x144.png' },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    ProjectCard,
    TeamCard,
    VueGrid,
    VueGridRow,
    VueGridItem,
    VueIconEmail,
    VueIconGithub,
    VueIconLinkedin,
    VueIconInstagram,
    VueIconFacebook,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';
.vision {
  width: 100%;
  height: 45vh;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1923.617" height="584" viewBox="0 0 1923.617 584"><path id="Path_1160" data-name="Path 1160" d="M0,0S-70.5,3.529,411.016,64.927c458.3,59.788,645.477,12.188,901.414,0s-97.969,101.263,67.376,87.382S1920,0,1920,0V584H0Z" transform="translate(3.617)" fill="%23980031"/></svg>');
  background-size: cover;

  text-align: center;

  padding-top: 14rem;
  margin-bottom: 14rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
  p {
    font-size: 3rem;
    margin-top: 3rem;
    line-height: 6rem;
  }
}

@media (max-width: 650px) {
  .vision {
    margin-bottom: 30rem;
  }
}

.about {
  width: 100%;
  height: 20vh;
  background-size: cover;

  text-align: left;

  padding-top: 2rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}

.aboutpara {
  text-align: justify;
}

.title {
  width: 100%;
  height: 25vh;
  background-size: cover;

  text-align: center;

  padding-top: 8rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}

.family img {
  object-fit: cover;
  width: 80%;
  margin: auto;
  border: none;

  // Make the image exactly at the center
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

a {
  color: $footer-link-color;
  font-weight: $footer-link-font-weight;

  &:hover {
    color: $footer-link-hover-color;
  }
}

.centeritem {
  text-align: center;
}

@media (min-width: 505px) {
  .cardsize {
    height: 42rem !important;
    width: 50rem !important;
  }
}

@media (max-width: 505px) {
  .cardsize {
    height: 60rem !important;
    width: 33rem !important;
  }
}

.social {
  font-size: $font-size-h1;
  display: inline-block;
  background: $brand-bg-color;
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  color: $brand-primary;
  &:hover {
    box-shadow: $button-active-shadow;
  }
  i {
    height: $font-size-h1;
    width: $font-size-h1;
  }
}
</style>
