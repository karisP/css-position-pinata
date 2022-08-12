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
    text: 'Notice how the grass is always 30px from the bottom of the screen not canvas, allowing for tall elements to scroll behind it.',
    action: 'Next'
  },
  {
    text: 'Step 4',
    action: 'Next'
  }
];
