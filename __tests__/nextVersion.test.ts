import nextVersion from '../nextVersion';
import { describe, expect, it, test } from '@jest/globals';

describe('Next Version Tests', () => {
  test('should return 1.2.4 for 1.2.3', () => { 
    expect(nextVersion("1.2.3")).toEqual("1.2.4")
   });

  test('should return 1.0.0 for 0.9.9', () => { 
    expect(nextVersion("0.9.9")).toEqual("1.0.0")
   });

  test('should return 1.2.3.4.5.6.7.9 for 1.2.3.4.5.6.7.8', () => { 
    expect(nextVersion("1.2.3.4.5.6.7.8")).toEqual("1.2.3.4.5.6.7.9")
   });

  test('should return 1.2.3.4.5.7.0.0 for 1.2.3.4.5.6.9.9', () => { 
    expect(nextVersion("1.2.3.4.5.6.9.9")).toEqual("1.2.3.4.5.7.0.0")
   });

  test('should return 9.9 for 10.0', () => { 
    expect(nextVersion("9.9")).toEqual("10.0")
   });

  test('should return 9. for 9.1', () => { 
    expect(nextVersion("9.")).toEqual("9.1")
   });

  test('should return .9 for 1.0', () => { 
    expect(nextVersion(".9")).toEqual("1.0")
   });

   test('should return Invalid current version number! for ""', () => { 
    expect(nextVersion("")).toEqual("Invalid current version number!")
   });

})