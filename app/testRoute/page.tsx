'use client';
import { useAppSelector } from '../_store/hooks';
import TestComponent from './_components/TestComponent';
export default function Test() {
  const { test } = useAppSelector(state => state.test);

  console.log(test, 'testtests');

  return (
    <div>
      testRoute-page
      <TestComponent />
    </div>);
}
