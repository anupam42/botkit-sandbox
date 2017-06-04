import assert from 'power-assert';
import * as Botmock from 'botkit-mock';
import * as controllers from '../src/controllers/slack';

describe('slack bot', () => {
  /* tslint:disable: no-let */
  let mockController: any;
  let bot;
  /* tslint:enable: no-let */

  beforeEach(() => {
    mockController = Botmock({ stats_optout: true, debug: false });
    bot = mockController.spawn({ type: 'slack' });
    controllers.ping(mockController);
  });

  afterEach(() => {
    mockController.shutdown();
  });

  it('should return `pong` if user types `ping`', async (done) => {
    const message = await bot.usersInput([{
      user: 'feedforce',
      channel: 'dfplusio-devel',
      messages: [
        { text: 'ping', isAssertion: true },
      ],
    }]);

    assert(message.text === 'pong');
    done();
  });
});
