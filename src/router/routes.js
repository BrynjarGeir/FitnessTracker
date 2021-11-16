
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Legs', component: () => import('pages/Legs.vue') },
      { path: '/Back', component: () => import('pages/Back.vue') },
      { path: '/Triceps', component: () => import('pages/Triceps.vue') },
      { path: '/Biceps', component: () => import('pages/Biceps.vue') },
      { path: '/Endurance', component: () => import('pages/Endurance.vue') },
      { path: '/WeightFat', component: () => import('pages/WeightFat.vue') },
      { path: '/Chest', component: () => import('pages/Chest.vue') },
      { path: '/Core', component: () => import('pages/Core.vue') },
      { path: '/Metrics/Metrics', component: () => import('pages/Metrics/Metrics.vue') },
      { path: '/Metrics/Legs', component: () => import('pages/Metrics/Legs.vue') },
      { path: '/Metrics/Back', component: () => import('pages/Metrics/Back.vue') },
      { path: '/Metrics/Triceps', component: () => import('pages/Metrics/Triceps.vue') },
      { path: '/Metrics/Biceps', component: () => import('pages/Metrics/Biceps.vue') },
      { path: '/Metrics/Endurance', component: () => import('pages/Metrics/Endurance.vue') },
      { path: '/Metrics/Chest', component: () => import('pages/Metrics/Chest.vue') },
      { path: '/Metrics/WeightFat', component: () => import('pages/Metrics/WeightFat.vue') },
      { path: '/Metrics/Core', component: () => import('pages//Metrics/Core.vue') },
      { path: 'Metrics/Back/Deadlift', component: () => import('pages/Metrics/Back/Deadlift.vue') },
      { path: 'Metrics/Back/InvertedRow', component: () => import('pages/Metrics/Back/InvertedRow.vue') },
      { path: 'Metrics/Back/LatPullDown', component: () => import('pages/Metrics/Back/LatPullDown.vue') },
      { path: 'Metrics/Back/PullUp', component: () => import('pages/Metrics/Back/PullUp.vue') },
      { path: 'Metrics/Back/SingleArmRow', component: () => import('pages/Metrics/Back/SingleArmRow.vue') },
      { path: 'Metrics/Back/RenegadeRow', component: () => import('pages/Metrics/Back/RenegadeRow.vue') },
      { path: 'Metrics/Back/SeatedCableRow', component: () => import('pages/Metrics/Back/SeatedCableRow.vue') },
      { path: 'Metrics/Back/StandingRow', component: () => import('pages/Metrics/Back/StandingRow.vue') },
      { path: 'Metrics/Legs/Squat', component: () => import('pages/Metrics/Legs/Squat.vue') },
      { path: 'Metrics/Legs/BulgarianSplitSquat', component: () => import('pages/Metrics/Legs/BulgarianSplitSquat.vue') },
      { path: 'Metrics/Legs/WalkingLunge', component: () => import('pages/Metrics/Legs/WalkingLunge.vue') },
      { path: 'Metrics/Chest/ChestPress', component: () => import('pages/Metrics/Chest/ChestPress.vue') },
      { path: 'Metrics/Chest/InclinedChestPress', component: () => import('pages/Metrics/Chest/InclinedChestPress.vue') },
      { path: 'Metrics/Chest/CableFly', component: () => import('pages/Metrics/Chest/CableFly.vue') },
      { path: 'Metrics/Chest/PressUp', component: () => import('pages/Metrics/Chest/PressUp.vue') },
      { path: 'Metrics/Chest/NarrowPressUp', component: () => import('pages/Metrics/Chest/NarrowPressUp.vue') },
      { path: 'Metrics/Chest/DumbbellChestPress', component: () => import('pages/Metrics/Chest/DumbbellChestPress.vue') },
      { path: 'Metrics/Chest/DumbbellChestFly', component: () => import('pages/Metrics/Chest/DumbbellChestFly.vue') },
      { path: 'Metrics/Chest/InclinedDumbbellChestFly', component: () => import('pages/Metrics/Chest/InclinedDumbbellChestFly.vue') },
      { path: 'Metrics/Chest/MachineFly', component: () => import('pages/Metrics/Chest/MachineFly.vue') },
      { path: 'Metrics/Triceps/NarrowChestPress', component: () => import('pages/Metrics/Triceps/NarrowChestPress.vue') },
      { path: 'Metrics/Triceps/CableRopeTricepPushdown', component: () => import('pages/Metrics/Triceps/CableRopeTricepPushdown.vue') },
      { path: 'Metrics/Triceps/LyingTricepExtension', component: () => import('pages/Metrics/Triceps/LyingTricepExtension.vue') },
      { path: 'Metrics/Biceps/BarbellCurl', component: () => import('pages/Metrics/Biceps/BarbellCurl.vue') },
      { path: 'Metrics/Biceps/HammerCurl', component: () => import('pages/Metrics/Biceps/HammerCurl.vue') },
      { path: 'Metrics/Biceps/InclinedDumbbellCurl', component: () => import('pages/Metrics/Biceps/InclinedDumbbellCurl.vue') },
      { path: 'Metrics/Biceps/StandingDumbbellCurl', component: () => import('pages/Metrics/Biceps/StandingDumbbellCurl.vue') },
      { path: 'Metrics/Biceps/ZottmanCurl', component: () => import('pages/Metrics/Biceps/ZottmanCurl.vue') },
      { path: 'Metrics/Endurance/Cycling', component: () => import('pages/Metrics/Endurance/Cycling.vue') },
      { path: 'Metrics/Endurance/Running', component: () => import('pages/Metrics/Endurance/Running.vue') },
      { path: 'Metrics/WeightFat/FatPercentage', component: () => import('pages/Metrics/WeightFat/FatPercentage.vue') },
      { path: 'Metrics/WeightFat/Weight', component: () => import('pages/Metrics/WeightFat/Weight.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
