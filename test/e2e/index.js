import fetchTest from './fetchRepository/'
import foreRunnerDBTest from './foreRunnerDBRepository/'

(async () => {
  await fetchTest();
  await foreRunnerDBTest();
})();