import axios from 'axios';

describe('When rendering', () => {
  it('should display a title', async () => {
    const url = app.getUrl('/');
    const response = await axios.get(url);

    expect(response.data).toContain('Faster e2e testing with QA Wolf');
  });
});
