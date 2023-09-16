const regexTitle = /^.{0,29}$/;
const regexHealthScore = /^(100|[1-9][0-9]?)$/;
const regexImage = /^(http|https):\/\/[^ "]+$/;
const regexSummary = /^.{0,299}$/;
const regexSteps = /^.{0,999}$/;

export default function validation(data) {
    const errors = {};

    if (!regexTitle.test(data.title)) errors.title = "Maximum 30 characters"
    if(!regexHealthScore.test(data.healthScore)) errors.healthScore = "It must be a number between 1 and 100";
    if(!regexImage.test(data.image)) errors.image = 'It should be a link: http...';
    if(!regexSummary.test(data.summary)) errors.summary = 'Maximum 300 characters';
    if(!regexSteps.test(data.steps)) errors.steps = 'Maximum 1000 characters';

    return errors;
}