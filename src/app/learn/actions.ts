import { ActionContext } from 'vuex';
import { ILearnState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface ILearnActions {
  /**
   * put your action names, parameters and return values here, for example:
   * myAction(context: ActionContext<ILearnState, IState>, param: any): Promise<any>;
   */
}

export const LearnActions: ILearnActions = {
  /**
   * here comes the implementation of your actions, for example:
   * myAction({ commit }, param) {
   *   commit('MY_MUTATION);
   * }
   */
};
