// Content translation lives in src/data/ar/*, keyed by the same ids as the
// English data. Merging happens here rather than inside each data file so the
// English datasets stay plain and readable, and so a translator only ever
// opens one folder.
//
// The merge is field-level and shallow: a translated entry overrides only the
// fields it provides, and anything missing falls back to English. That is what
// lets the Arabic side be filled in progressively without the page breaking —
// a half-translated entry renders, it does not throw.

import { careers, getCareer as getCareerEn } from '@/data/careers'
import { majors, getMajor as getMajorEn } from '@/data/majors'
import { masters, getMaster as getMasterEn } from '@/data/masters'
import { activities } from '@/data/activities'
import { workshops } from '@/data/workshops'
import { scholarships } from '@/data/scholarships'
import { resources } from '@/data/resources'
import { wellbeingTopics } from '@/data/wellbeing'

import arCareers from '@/data/ar/careers'
import arMajors from '@/data/ar/majors'
import arMasters from '@/data/ar/masters'
import arActivities from '@/data/ar/activities'
import arWorkshops from '@/data/ar/workshops'
import arScholarships from '@/data/ar/scholarships'
import arResources from '@/data/ar/resources'
import arWellbeing from '@/data/ar/wellbeing'
import {
  subjects,
  years,
  stages,
  prerequisites,
  skills,
  lengths,
  roadmapWhen,
  salaryBands,
} from '@/data/ar/vocab'

const dictionaries = {
  careers: arCareers,
  majors: arMajors,
  masters: arMasters,
  activities: arActivities,
  workshops: arWorkshops,
  scholarships: arScholarships,
  resources: arResources,
  wellbeing: arWellbeing,
}

const merge = (entry, dict) => {
  const translated = dict?.[entry.id]
  return translated ? { ...entry, ...translated } : entry
}

const localiseList = (list, lang, key) =>
  lang === 'ar' ? list.map((entry) => merge(entry, dictionaries[key])) : list

const localiseOne = (entry, lang, key) =>
  entry && lang === 'ar' ? merge(entry, dictionaries[key]) : entry

// Majors carry a lot of repeated structure — 803 course names drawn from 656
// unique ones, plus year labels, stage names, prerequisites and skills that
// recur across faculties. Those come from the shared vocabulary rather than
// being written out per major, so a term is translated once and reads the same
// everywhere. Anything the vocabulary does not cover falls through in English.
const term = (dict, value) => dict[value] ?? value

const localiseMajor = (major, lang) => {
  if (!major || lang !== 'ar') return major
  const translated = merge(major, dictionaries.majors)
  return {
    ...translated,
    typicalLength: term(lengths, major.typicalLength),
    prerequisites: major.prerequisites.map((item) => term(prerequisites, item)),
    skills: major.skills.map((item) => term(skills, item)),
    curriculum: major.curriculum.map((stage) => ({
      years: term(years, stage.years),
      stage: term(stages, stage.stage),
      subjects: stage.subjects.map((item) => term(subjects, item)),
    })),
  }
}

// Careers reuse the vocabulary for the parts that repeat — the roadmap timing
// labels, the salary bands and the skill tags — while the prose that is unique
// to each career comes from ar/careers.js. The roadmap merges step by step so
// a partially translated roadmap still renders with the right timings.
const localiseCareer = (career, lang) => {
  if (!career || lang !== 'ar') return career
  const translated = merge(career, dictionaries.careers)
  return {
    ...translated,
    salaryRange: term(salaryBands, career.salaryRange),
    skills: (translated.skills ?? career.skills).map((item) => term(skills, item)),
    roadmap: career.roadmap.map((step, index) => ({
      ...step,
      ...(translated.roadmap?.[index] ?? {}),
      when: term(roadmapWhen, step.when),
    })),
  }
}

export const getCareers = (lang) =>
  lang === 'ar' ? careers.map((career) => localiseCareer(career, lang)) : careers
export const getCareer = (id, lang) => localiseCareer(getCareerEn(id), lang) ?? getCareerEn(id)

export const getMajors = (lang) =>
  lang === 'ar' ? majors.map((major) => localiseMajor(major, lang)) : majors
export const getMajor = (id, lang) => localiseMajor(getMajorEn(id), lang) ?? getMajorEn(id)

export const getMasters = (lang) => localiseList(masters, lang, 'masters')
export const getMaster = (id, lang) => localiseOne(getMasterEn(id), lang, 'masters')

export const getActivities = (lang) => localiseList(activities, lang, 'activities')
export const getWorkshops = (lang) => localiseList(workshops, lang, 'workshops')
export const getScholarships = (lang) => localiseList(scholarships, lang, 'scholarships')
export const getResources = (lang) => localiseList(resources, lang, 'resources')
export const getWellbeing = (lang) => localiseList(wellbeingTopics, lang, 'wellbeing')

// Filter dropdowns are built from the data, so their options need translating
// too — otherwise an Arabic page offers English categories. Values stay the
// English originals because that is what the entries are filtered on; only the
// label the reader sees changes.
export const facetLabel = (value, lang, dict) =>
  lang === 'ar' ? (dict?.[value] ?? value) : value
