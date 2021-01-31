import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Learn from './Learn.vue';
import { ILearnState } from '../state';
import { LearnModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Learn.vue', () => {
  let store: Store<ILearnState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        learn: LearnModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Learn, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Learn.prefetch({});
    // expect(wrapper.find('h1').text()).toBe('Learn');
  });
});
