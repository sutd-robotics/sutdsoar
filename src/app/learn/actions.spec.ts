import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { LearnDefaultState, ILearnState } from './state';
import { IState } from '@/app/state';
import { LearnActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('LearnActions', () => {
  let testContext: ActionContext<ILearnState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: LearnDefaultState(),
    } as ActionContext<ILearnState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('Please write the tests for the actions here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/actions.spec.ts
    expect(false).toBeFalsy();
  });
});
