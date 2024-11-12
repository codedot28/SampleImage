<template>
  <div class="q-pa-xl">
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
     
      <p class="q-mt-lg text-grey-8 q-my-sm" style="white-space: pre-wrap;">{{ course?.content }}</p>

      <template #footer>
        <q-btn
          v-if="prevCourse"
          label="이전 강의"
          color="primary"
          unelevated
          :to="prevCourse.path"
        />
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음 강의"
          color="primary"
          unelevated
          :to="nextCourse.path"
        />
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = useCourse(courseSlug);
console.log('[courseSlug].vue 컴포넌트 setup hooks');
definePageMeta({
  key: (route) => route.fullPath,
});
</script>

<style scoped></style>