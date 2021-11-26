
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: {requiresAuth: true} },
      { path: '/Legs', component: () => import('pages/Legs.vue'), meta: {requiresAuth: true} },
      { path: '/Back', component: () => import('pages/Back.vue'), meta: {requiresAuth: true} },
      { path: '/Triceps', component: () => import('pages/Triceps.vue'), meta: {requiresAuth: true} },
      { path: '/Biceps', component: () => import('pages/Biceps.vue'), meta: {requiresAuth: true} },
      { path: '/Endurance', component: () => import('pages/Endurance.vue'), meta: {requiresAuth: true} },
      { path: '/WeightFat', component: () => import('pages/WeightFat.vue'), meta: {requiresAuth: true} },
      { path: '/Chest', component: () => import('pages/Chest.vue'), meta: {requiresAuth: true} },
      { path: '/Core', component: () => import('pages/Core.vue'), meta: {requiresAuth: true} },
      { path: '/Goals', component: () => import('pages/Goals.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics', component: () => import('pages/Metrics/Metrics.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Legs', component: () => import('pages/Metrics/Legs.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Back', component: () => import('pages/Metrics/Back.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Triceps', component: () => import('pages/Metrics/Triceps.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Biceps', component: () => import('pages/Metrics/Biceps.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Endurance', component: () => import('pages/Metrics/Endurance.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Chest', component: () => import('pages/Metrics/Chest.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/WeightFat', component: () => import('pages/Metrics/WeightFat.vue'), meta: {requiresAuth: true} },
      { path: '/Metrics/Core', component: () => import('pages//Metrics/Core.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/Deadlift', component: () => import('pages/Metrics/Back/Deadlift.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/InvertedRow', component: () => import('pages/Metrics/Back/InvertedRow.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/LatPullDown', component: () => import('pages/Metrics/Back/LatPullDown.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/PullUp', component: () => import('pages/Metrics/Back/PullUp.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/SingleArmRow', component: () => import('pages/Metrics/Back/SingleArmRow.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/RenegadeRow', component: () => import('pages/Metrics/Back/RenegadeRow.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/SeatedCableRow', component: () => import('pages/Metrics/Back/SeatedCableRow.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/SupermanPull', component: () => import('pages/Metrics/Back/SupermanPull.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Back/StandingRow', component: () => import('pages/Metrics/Back/StandingRow.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Legs/Squat', component: () => import('pages/Metrics/Legs/Squat.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Legs/BulgarianSplitSquat', component: () => import('pages/Metrics/Legs/BulgarianSplitSquat.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Legs/WalkingLunge', component: () => import('pages/Metrics/Legs/WalkingLunge.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/ChestPress', component: () => import('pages/Metrics/Chest/ChestPress.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/InclinedChestPress', component: () => import('pages/Metrics/Chest/InclinedChestPress.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/InclinedDumbbellChestPress', component: () => import('pages/Metrics/Chest/InclinedDumbbellChestPress.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/CableFly', component: () => import('pages/Metrics/Chest/CableFly.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/PressUp', component: () => import('pages/Metrics/Chest/PressUp.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/NarrowPressUp', component: () => import('pages/Metrics/Chest/NarrowPressUp.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/DumbbellChestPress', component: () => import('pages/Metrics/Chest/DumbbellChestPress.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/DumbbellChestFly', component: () => import('pages/Metrics/Chest/DumbbellChestFly.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/InclinedDumbbellChestFly', component: () => import('pages/Metrics/Chest/InclinedDumbbellChestFly.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Chest/MachineFly', component: () => import('pages/Metrics/Chest/MachineFly.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Core/WoodChopper', component: () => import('pages/Metrics/Core/WoodChopper.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Core/Crunch', component: () => import('pages/Metrics/Core/Crunch.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Core/InverseCrunch', component: () => import('pages/Metrics/Core/InverseCrunch.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Core/MachineCrunch', component: () => import('pages/Metrics/Core/MachineCrunch.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Core/MachineTorsoRotation', component: () => import('pages/Metrics/Core/MachineTorsoRotation.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Triceps/NarrowChestPress', component: () => import('pages/Metrics/Triceps/NarrowChestPress.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Triceps/CableRopeTricepPushdown', component: () => import('pages/Metrics/Triceps/CableRopeTricepPushdown.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Triceps/LyingTricepExtension', component: () => import('pages/Metrics/Triceps/LyingTricepExtension.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Biceps/BarbellCurl', component: () => import('pages/Metrics/Biceps/BarbellCurl.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Biceps/HammerCurl', component: () => import('pages/Metrics/Biceps/HammerCurl.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Biceps/InclinedDumbbellCurl', component: () => import('pages/Metrics/Biceps/InclinedDumbbellCurl.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Biceps/StandingDumbbellCurl', component: () => import('pages/Metrics/Biceps/StandingDumbbellCurl.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Biceps/ZottmanCurl', component: () => import('pages/Metrics/Biceps/ZottmanCurl.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Endurance/Cycling', component: () => import('pages/Metrics/Endurance/Cycling.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Endurance/Running', component: () => import('pages/Metrics/Endurance/Running.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/Endurance/Swimming', component: () => import('pages/Metrics/Endurance/Swimming.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/WeightFat/FatPercentage', component: () => import('pages/Metrics/WeightFat/FatPercentage.vue'), meta: {requiresAuth: true} },
      { path: 'Metrics/WeightFat/Weight', component: () => import('pages/Metrics/WeightFat/Weight.vue'), meta: {requiresAuth: true} }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Authentication.vue')}
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
