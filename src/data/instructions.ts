type Instructions = {
  text: string;
  action: string | null;
};

export const instructions: Instructions[] = [
  {
    text: 'You have been given a canvas to build the scenery for the party. The canvas is currently position static by default. Start by setting the canvas to position relative.',
    action: 'Next'
  },
  {
    text: 'Now we need to set the grass to the bottom of the screen using position fixed',
    action: 'Next'
  },
  {
    text: 'Step 3',
    action: 'Next'
  },
  {
    text: 'Step 4',
    action: 'Next'
  }
];
