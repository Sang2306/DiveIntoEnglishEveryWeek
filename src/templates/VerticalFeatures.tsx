import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="TOP TIPS FOR IMPROVING YOUR SPOKEN ENGLISH"
    description="Learning how to speak fluent, confident and natural English is an achievable goal. Every English learner is different, but there are a number of easy ways to improve in a reasonably short period of time."
  >
    <VerticalFeatureRow
      title="Speak, speak, speak!"
      description="Be confident and speak as often as possible to as many people as you possibly can! Do not be shy to make mistakes! The more you practice the better and more confident you will become in your pronunciation and vocabulary. Remember, speaking is a skill like learning a musical instrument or new sport – the only way you can get good is to actually do it!"
      image="/assets/images/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Do interesting activities in English"
      description="Take a cooking course in English or join a book club! Anything you enjoy doing, make sure you do it and communicate it in English. Using English to talk about things you enjoy will make practising a positive experience."
      image="/assets/images/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Have a debate"
      description="Debate all the topics that interest you with friends in English. Try to use as much vocabulary as you can to get your point across and listen to the other arguments carefully so you can argue against them effectively."
      image="/assets/images/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
