import * as assert from 'power-assert';
import Botmock = require('botkit-mock');
import * as controllers from '../src/controllers/slack';

describe('slack bot', () => {
  const baseMessage = {
    user: 'feedforce',
    channel: 'randomChannel',
  };
  /* tslint:disable: no-let */
  let mockController: BotkitMock.Controller;
  let bot: BotkitMock.Bot;
  /* tslint:enable: no-let */

  beforeEach(() => {
    mockController = Botmock({ stats_optout: true, debug: false });
    bot = mockController.spawn({ type: 'slack' });
  });

  afterEach(() => {
    mockController.shutdown();
  });

  describe('ping', () => {
    beforeEach(() => controllers.ping(mockController as any));

    it('should return `pong` if user types `ping`', async (done) => {
      const message = await bot.usersInput([{
        ...baseMessage,
        messages: [
          { text: 'ping', isAssertion: true },
        ],
      }]);

      assert(message.text === 'pong');
      done();
    });

    it('should return `pong` if user type `Ping`', async (done) => {
      const message = await bot.usersInput([{
        ...baseMessage,
        messages: [
          { text: 'Ping', isAssertion: true },
        ],
      }]);

      assert(message.text === 'pong');
      done();
    });

    it('should not return ping if user ping is not a word', async (done) => {
      const message = await bot.usersInput([
        {
          ...baseMessage,
          messages: [
            { text: 'pingu', isAssertion: true },
          ],
        },
      ]);

      assert(message.text === undefined);
      done();
    });
  });
});
