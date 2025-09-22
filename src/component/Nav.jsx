// Nav.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove the Router import
import Student from '../pages/Student';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Instructor from '../pages/Instructor';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Courses from '../pages/Courses';

import HtmlIntro from '../CourseIntro/HtmlIntro';
import CssIntro from '../CourseIntro/CssIntro';
import JavaIntro from '../CourseIntro/JavaIntro';
import JsIntro from '../CourseIntro/JsIntro';
import ReactIntro from '../CourseIntro/ReactIntro';
import CppIntro from '../CourseIntro/CppIntro';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Profile from '../pages/Profile';

import InttoductionToHTML from '../CourseMaterials/HTMLContents/m1/InttoductionToHTML';
import HTMLeditors from '../CourseMaterials/HTMLContents/m1/HTMLeditors';
import StructureOfHtml from '../CourseMaterials/HTMLContents/m1/StructureOfHtml';
import DocumentStructureTags from '../CourseMaterials/HTMLContents/m2/DocumentStructureTags';
import TextFormattingTags from '../CourseMaterials/HTMLContents/m2/TextFormattingTags';
import HtmlAttributes from '../CourseMaterials/HTMLContents/m2/HtmlAttributes';
import HtmlElements from '../CourseMaterials/HTMLContents/m2/HtmlElements';
import List from '../CourseMaterials/HTMLContents/m2/List';
import Tables from '../CourseMaterials/HTMLContents/m2/Tables';
import HtmlForms from '../CourseMaterials/HTMLContents/m3/HtmlForms';
import LinksAndMedia from '../CourseMaterials/HTMLContents/m3/LinksAndMedia';
import SemanticTags from '../CourseMaterials/HTMLContents/m3/SemanticTags';
import MovingTowardsStyling from '../CourseMaterials/HTMLContents/m4/MovingTowardsStyling';
import UnderstandingDOM from '../CourseMaterials/HTMLContents/m4/UnderstandingDOM';

import IntroductionToCss from '../CourseMaterials/CSSContents/m1/IntroductionToCss';
import DifferentWaysOfWritingCSS from '../CourseMaterials/CSSContents/m1/DifferentWaysOfWritingCSS';
import CssSelectors from '../CourseMaterials/CSSContents/m1/CssSelectors';
import StylingTextWithCSS from '../CourseMaterials/CSSContents/m1/StylingTextWithCSS';
import StylingListsAndLinks from '../CourseMaterials/CSSContents/m2/StylingListsAndLinks';
import StylingBackground from '../CourseMaterials/CSSContents/m2/StylingBackground';
import CSSBlockModels from '../CourseMaterials/CSSContents/m2/CSSBlockModels';
import DisplayAndPositionProperty from '../CourseMaterials/CSSContents/m3/DisplayAndPositionProperty';
import FloatAndClearOverview from '../CourseMaterials/CSSContents/m3/FloatAndClearOverview';
import FlexBox from '../CourseMaterials/CSSContents/m4/FlexBox';
import Grid from '../CourseMaterials/CSSContents/m4/Grid';

import IntroductionToJs from '../CourseMaterials/JSContents/m1/IntroductionToJs';
import RunningJs from '../CourseMaterials/JSContents/m1/RunningJs';
import Syntaxjs from '../CourseMaterials/JSContents/m2/Syntaxjs';
import Operatorsjs from '../CourseMaterials/JSContents/m2/Operatorsjs';
import InputOutputJs from '../CourseMaterials/JSContents/m2/InputOutputJs';
import MasteringConditionalStatement from '../CourseMaterials/JSContents/m2/MasteringConditionalStatement';
import MasteringSwitchStatement from '../CourseMaterials/JSContents/m2/MasteringSwitchStatement';
import MasteringLoops from '../CourseMaterials/JSContents/m2/MasteringLoops';
import MasteringFunctions from '../CourseMaterials/JSContents/m2/MasteringFunctions';
import ScopesJS from '../CourseMaterials/JSContents/m3/ScopesJS';
import ArrowFunctions from '../CourseMaterials/JSContents/m3/ArrowFunctions';
import ObjectsJs from '../CourseMaterials/JSContents/m4/ObjectsJs';
import ObjectMethods from '../CourseMaterials/JSContents/m4/ObjectMethods';
import ArrayJs from '../CourseMaterials/JSContents/m4/ArrayJs';
import ArrayMefthodsjs from '../CourseMaterials/JSContents/m4/ArrayMefthodsjs';
import Stringjs from '../CourseMaterials/JSContents/m5/Stringjs';
import NumberMethods from '../CourseMaterials/JSContents/m5/NumberMethods';
import ErrorsJs from '../CourseMaterials/JSContents/m5/ErrorsJs';

import IntroductionToCpp from '../CourseMaterials/CppContents/m1/IntroductionToCpp';
import CodeStructureCpp from '../CourseMaterials/CppContents/m1/CodeStructureCpp';
import InputOutputCpp from '../CourseMaterials/CppContents/m1/InputOutputCpp';
import DatatypesCpp from '../CourseMaterials/CppContents/m2/DatatypesCpp';
import OverflowUnderflowCpp from '../CourseMaterials/CppContents/m2/OverflowUnderflowCpp';
import TypeCastingConversionCpp from '../CourseMaterials/CppContents/m2/TypeCastingConversionCpp';
import OperatorsCpp from '../CourseMaterials/CppContents/m2/OperatorsCpp';
import EscapeSequenceCpp from '../CourseMaterials/CppContents/m2/EscapeSequenceCpp';
import ConditionalStatements from '../CourseMaterials/CppContents/m3/ConditionalStatements';
import LoopingStatement from '../CourseMaterials/CppContents/m3/LoopingStatement';
import JumpStatementsCpp from '../CourseMaterials/CppContents/m3/JumpStatementsCpp';
import FunctionsCpp from '../CourseMaterials/CppContents/m3/FunctionsCpp';
import ArraysCpp from '../CourseMaterials/CppContents/m4/ArraysCpp';
import ArraysAndLoops from '../CourseMaterials/CppContents/m4/ArraysAndLoops';
import MultiDimentionalArrayCpp from '../CourseMaterials/CppContents/m4/MultiDimentionalArrayCpp';
import Structures from '../CourseMaterials/CppContents/m4/Structures';
import Pointers from '../CourseMaterials/CppContents/m4/Pointers';
import ClassAndObjCpp from '../CourseMaterials/CppContents/m5/ClassAndObjCpp';
import Constructors from '../CourseMaterials/CppContents/m5/Constructors';
import OopsCpp from '../CourseMaterials/CppContents/m5/OopsCpp';
import Vectors from '../CourseMaterials/CppContents/m5/Vectors';
import Sets from '../CourseMaterials/CppContents/m5/Sets';
import Maps from '../CourseMaterials/CppContents/m5/Maps';

import IntroductionToJava from '../CourseMaterials/JavaContents/m1/IntroductionToJava';
import SettingJava from '../CourseMaterials/JavaContents/m1/SettingJava';
import BasicSyntaxJava from '../CourseMaterials/JavaContents/m1/BasicSyntaxJava';
import VariablesDatatypesJava from '../CourseMaterials/JavaContents/m2/VariablesDatatypesJava';
import JavaTypeCast from '../CourseMaterials/JavaContents/m2/JavaTypeCast';
import JavaInputOutput from '../CourseMaterials/JavaContents/m2/JavaInputOutput';
import OperatorsJava from '../CourseMaterials/JavaContents/m2/OperatorsJava';
import StringsJava from '../CourseMaterials/JavaContents/m2/StringsJava';
import CommentsJava from '../CourseMaterials/JavaContents/m2/CommentsJava';
import ConditionalStatementJava from '../CourseMaterials/JavaContents/m3/ConditionalStatementJava';
import LoopingStatements from '../CourseMaterials/JavaContents/m3/LoopingStatements';
import JumpStatementsJava from '../CourseMaterials/JavaContents/m3/JumpStatementsJava';
import ArraysJava from '../CourseMaterials/JavaContents/m3/ArraysJava';
import MultiArrayJava from '../CourseMaterials/JavaContents/m3/MultiArrayJava';
import MedthodsJava from '../CourseMaterials/JavaContents/m4/MedthodsJava';
import ParamentsAndReturn from '../CourseMaterials/JavaContents/m4/ParamentsAndReturn';
import Overloading from '../CourseMaterials/JavaContents/m4/Overloading';
import ClassObjJava from '../CourseMaterials/JavaContents/m4/ClassObjJava';
import ConstructorsJava from '../CourseMaterials/JavaContents/m4/ConstructorsJava';
import OopsJava from '../CourseMaterials/JavaContents/m4/OopsJava';
import ExceptionHandling from '../CourseMaterials/JavaContents/m5/ExceptionHandling';
import ExceptionKeywords from '../CourseMaterials/JavaContents/m5/ExceptionKeywords';
import FileHandlig from '../CourseMaterials/JavaContents/m5/FileHandlig';

import IntroductionToReact from '../CourseMaterials/ReactContents/m1/IntroductionToReact';
import SettingUpWithReact from '../CourseMaterials/ReactContents/m1/SettingUpWithReact';
import UnderstandingJSX from '../CourseMaterials/ReactContents/m1/UnderstandingJSX';
import Components from '../CourseMaterials/ReactContents/m2/Components';
import Props from '../CourseMaterials/ReactContents/m2/Props';
import ReactEvents from '../CourseMaterials/ReactContents/m2/ReactEvents';
import ConditionalRendering from '../CourseMaterials/ReactContents/m2/ConditionalRendering';
import RenderingArrays from '../CourseMaterials/ReactContents/m2/RenderingArrays';
import ReactRouter from '../CourseMaterials/ReactContents/m3/ReactRouter';
import SettingRouter from '../CourseMaterials/ReactContents/m3/SettingRouter';
import RouteAndLink from '../CourseMaterials/ReactContents/m3/RouteAndLink';
import ReactCss from '../CourseMaterials/ReactContents/m3/ReactCss';
import HtmlQuiz from '../CourseMaterials/HTMLContents/m1/HtmlQuiz1';
import IntroductionToAnimation from '../CourseMaterials/CSSContents/m5/IntroductionToAnimation';
import ShortHand from '../CourseMaterials/CSSContents/m5/ShortHand';
import HtmlQuiz2 from '../CourseMaterials/HTMLContents/m2/HtmlQuiz2';
import HtmlQuiz3 from '../CourseMaterials/HTMLContents/m3/HtmlQuiz3';
import HtmlQuiz4 from '../CourseMaterials/HTMLContents/m4/HtmlQuiz4';
import CssQuiz1 from '../CourseMaterials/CSSContents/m1/CssQuiz1';
import CssQuiz2 from '../CourseMaterials/CSSContents/m2/CssQuiz2';
import CssQuiz3 from '../CourseMaterials/CSSContents/m3/CssQuiz3';
import CssQuiz4 from '../CourseMaterials/CSSContents/m4/CssQuiz4';
import CssQuiz5 from '../CourseMaterials/CSSContents/m5/CssQuiz5';
import Assignments from '../pages/Assignments';
import PythonIntro from '../CourseIntro/PythonIntro';
import MySQLIntro from '../CourseIntro/MySQLIntro';
import BootstrapIntro from '../CourseIntro/BootstrapIntro';
import MongoDBIntro from '../CourseIntro/MongodbIntro';
import TailwindCSSIntro from '../CourseIntro/TailwindIntro';
import NodeExpressIntro from '../CourseIntro/ExpressIntro';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import InstructorDashboard from '../pages/InstructorDashboard';



export default function Nav() {
  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/dashboard' 
               element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
               }
        />

        <Route path='/instructor-dashboard' 
               element={
                <ProtectedRoute>
                  <InstructorDashboard/>
                </ProtectedRoute>
               }
        />

        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/assignments' element={<Assignments/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/courses/cssintro' element={<CssIntro/>} />
        <Route path='/courses/htmlintro' element={<HtmlIntro/>} />
        <Route path='/courses/cppintro'  element={<CppIntro/>} />
        <Route path='/courses/javaintro' element={<JavaIntro/>} />
        <Route path='/courses/jsintro' element={<JsIntro/>} />
        <Route path='/courses/reactintro' element={<ReactIntro/>} />
        <Route path='/courses/pythonintro' element={<PythonIntro/>} />
        <Route path='/courses/mysqlintro' element={<MySQLIntro/>} />
        <Route path='/courses/bootstrapintro' element={<BootstrapIntro/>} />
        <Route path='/courses/mongodbintro' element={<MongoDBIntro/>} />
        <Route path='/courses/tailwindintro' element={<TailwindCSSIntro/>} />
        <Route path='/courses/node-expressintro' element={<NodeExpressIntro/>} />


        <Route path='/courses/html/m1/introduction-to-html' element={<InttoductionToHTML/>} />
        <Route path='/courses/html/m1/HTML-editors' element={<HTMLeditors/>} />
        <Route path='/courses/html/m1/Basic-Structure-of-HTML' element={<StructureOfHtml/>} />
        <Route path='/Courses/html/m2/Document-Structure-Tags' element={<DocumentStructureTags/>} />
        <Route path='/Courses/html/m2/Text-Formatting-Tags' element={<TextFormattingTags/>} />
        <Route path='/Courses/html/m2/HTML-Attributes' element={<HtmlAttributes/>} />
        <Route path='/Courses/html/m2/HTML-Elements' element={<HtmlElements/>} />
        <Route path='/Courses/html/m2/List' element={<List/>} />
        <Route path='/Courses/html/m2/Tables' element={<Tables/>} />
        <Route path='/Courses/html/m3/HTML-Forms' element={<HtmlForms/>} />
        <Route path='/Courses/html/m3/Links-and-Media' element={<LinksAndMedia/>} />
        <Route path='/Courses/html/m3/Semantic-Tags' element={<SemanticTags/>} />
        <Route path='/Courses/html/m4/Moving-towards-Styling' element={<MovingTowardsStyling/>} />
        <Route path='/Courses/html/m4/Understanding-DOM' element={<UnderstandingDOM/>} />
        <Route path='/Courses/htm/m1/quiz1' element={<HtmlQuiz/>} />
        <Route path='/Courses/html/m2/quiz2' element={<HtmlQuiz2/>} />
        <Route path='/Courses/html/m3/quiz3' element={<HtmlQuiz3/>} />
        <Route path='/Courses/html/m4/quiz4' element={<HtmlQuiz4/>} />


        <Route path='/courses/css/m1/Introduction-to-Css' element={<IntroductionToCss/>} />
        <Route path='/courses/css/m1/different-ways-of-writing-css' element={<DifferentWaysOfWritingCSS/>} />
        <Route path='/courses/css/m1/Css-selectors' element={<CssSelectors/>} />
        <Route path='/courses/css/m1/Styling-text' element={<StylingTextWithCSS/>} />
        <Route path='/courses/css/m2/CSS-Block-Models' element={<CSSBlockModels/>} />
        <Route path='/courses/css/m2/Styling-lists-links' element={<StylingListsAndLinks/>} />
        <Route path='/courses/css/m2/Styling-Background' element={<StylingBackground/>} />
        <Route path='/courses/css/m3/Display,Position-Property' element={<DisplayAndPositionProperty/>} />
        <Route path='/courses/css/m3/Float-clear-overview' element={<FloatAndClearOverview/>} />
        <Route path='/courses/css/m4/Introduction-to-flexbox' element={<FlexBox/>} />
        <Route path='/courses/css/m4/Introduction-to-Grid' element={<Grid/>} />
        <Route path='/courses/css/m5/Introduction-to-animation' element={<IntroductionToAnimation/>} />
        <Route path='/courses/css/m5/shorthand' element={<ShortHand/>} />
        <Route path='/courses/css/m1/assigment1' element={<CssQuiz1/>} />
        <Route path='/courses/css/m2/assigment2' element={<CssQuiz2/>} />
        <Route path='/courses/css/m3/assigment3' element={<CssQuiz3/>} />
        <Route path='/courses/css/m4/assigment4' element={<CssQuiz4/>} />
        <Route path='/courses/css/m5/assigment5' element={<CssQuiz5/>} />
       


        <Route path='/courses/js/m1/Introduction-to-Js' element={<IntroductionToJs/>} />
        <Route path='/courses/js/m1/Runnning-Js' element={<RunningJs/>} />
        <Route path='/courses/js/m2/Syntax-variables-datatypes' element={<Syntaxjs/>} />
        <Route path='/courses/js/m2/Operators' element={<Operatorsjs/>} />
        <Route path='/courses/js/m2/Input-Output-in-JS' element={<InputOutputJs/>} />
        <Route path='/courses/js/m2/Mastering-Conditional-Statement' element={<MasteringConditionalStatement/>} />
        <Route path='/courses/js/m2/Mastering-Switch-Statement' element={<MasteringSwitchStatement/>} />
        <Route path='/courses/js/m2/Mastering-Loops' element={<MasteringLoops/>} />
        <Route path='/courses/js/m2/Mastering-Functions' element={<MasteringFunctions/>} />
        <Route path='/courses/js/m3/Scopes-js' element={<ScopesJS/>} />
        <Route path='/courses/js/m3/Mastering-arrow-Functions' element={<ArrowFunctions/>} />
        <Route path='/courses/js/m4/Introduction-to-objcts' element={<ObjectsJs/>} />
        <Route path='/courses/js/m4/Object-methods' element={<ObjectMethods/>} />
        <Route path='/courses/js/m4/Introduction-to-arrays' element={<ArrayJs/>} />
        <Route path='/courses/js/m4/Array-methods' element={<ArrayMefthodsjs/>} />
        <Route path='/courses/js/m4/String-methods' element={<Stringjs/>} />
        <Route path='/courses/js/m4/Number-methods' element={<NumberMethods/>} />
        <Route path='/courses/js/m4/Error-in-js' element={<ErrorsJs/>} />


        <Route path='/courses/c++/m1/Introduction-to-C++' element={<IntroductionToCpp/>}  />
        <Route path='/courses/c++/m1/basic-code-structure' element={<CodeStructureCpp/>}  />
        <Route path='/courses/c++/m1/input-output' element={<InputOutputCpp/>}  />
        <Route path='/courses/c++/m2/datatypes' element={<DatatypesCpp/>}  />
        <Route path='/courses/c++/m2/overflow-underflow' element={<OverflowUnderflowCpp/>}  />
        <Route path='/courses/c++/m2/typecasting' element={<TypeCastingConversionCpp/>}  />
        <Route path='/courses/c++/m2/operators' element={<OperatorsCpp/>}  />
        <Route path='/courses/c++/m2/escape-sequences' element={<EscapeSequenceCpp/>}  />
        <Route path='/courses/c++/m3/conditional-statements' element={<ConditionalStatements/>}  />
        <Route path='/courses/c++/m3/looping-statements' element={<LoopingStatement/>}  />
        <Route path='/courses/c++/m3/jump-statements' element={<JumpStatementsCpp/>}  />
        <Route path='/courses/c++/m3/functions' element={<FunctionsCpp/>}  />
        <Route path='/courses/c++/m4/arrays' element={<ArraysCpp/>}  />
        <Route path='/courses/c++/m4/arrays-loops' element={<ArraysAndLoops/>}  />
        <Route path='/courses/c++/m4/2d-arrays' element={<MultiDimentionalArrayCpp/>}  />
        <Route path='/courses/c++/m4/structures' element={<Structures/>}  />
        <Route path='/courses/c++/m4/pointers' element={<Pointers/>}  />
        <Route path='/courses/c++/m5/class-objects' element={<ClassAndObjCpp/>}  />
        <Route path='/courses/c++/m5/constructors' element={<Constructors/>}  />
        <Route path='/courses/c++/m5/oop-concepts' element={<OopsCpp/>}  />
        <Route path='/courses/c++/m5/vectors' element={<Vectors/>}  />
        <Route path='/courses/c++/m5/sets' element={<Sets/>}  />
        <Route path='/courses/c++/m5/maps' element={<Maps/>}  />

        <Route path='/courses/java/m1/java-introduction' element={<IntroductionToJava/>}  />
        <Route path='/courses/java/m1/setting-up-with-java' element={<SettingJava/>}  />
        <Route path='/courses/java/m1/basic-syntax' element={<BasicSyntaxJava/>}  />
        <Route path='/courses/java/m2/variables-and-datatypes' element={<VariablesDatatypesJava/>}  />
        <Route path='/courses/java/m2/typecasting-and-type-conversion' element={<JavaTypeCast/>}  />
        <Route path='/courses/java/m2/input-and-output' element={<JavaInputOutput/>}  />
        <Route path='/courses/java/m2/operators' element={<OperatorsJava/>}  />
        <Route path='/courses/java/m2/strings' element={<StringsJava/>}  />
        <Route path='/courses/java/m2/comments-and-math-functions' element={<CommentsJava/>}  />
        <Route path='/courses/java/m3/conditional-statements' element={<ConditionalStatementJava/>}  />
        <Route path= '/courses/java/m3/looping-statements' element={<LoopingStatements/>}  />
        <Route path='/courses/java/m3/jump-statements'  element={<JumpStatementsJava/>}  />
        <Route path='/courses/java/m3/introduction-to-arrays' element={<ArraysJava/>}  />
        <Route path='/courses/java/m3/multidimensional-arrays' element={<MultiArrayJava/>}  />
        <Route path='/courses/java/m4/introduction-to-methods' element={<MedthodsJava/>}  />
        <Route path='/courses/java/m4/parameters-and-return-values' element={<ParamentsAndReturn/>}  />
        <Route path='/courses/java/m4/method-overloading-and-overriding' element={<Overloading/>}  />
        <Route path='/courses/java/m4/class-and-objects' element={<ClassObjJava/>}  />
        <Route path='/courses/java/m4/constructors-and-access-specifiers' element={<ConstructorsJava/>}  />
        <Route path= '/courses/java/m4/oops-concepts'  element={<OopsJava/>}  />
        <Route path= '/courses/java/m5/exception-handling'  element={<ExceptionHandling/>}  />
        <Route path= '/courses/java/m5/exception-handling-keywords'  element={<ExceptionKeywords/>}  />
        <Route path= '/courses/java/m5/file-handling'  element={<FileHandlig/>}  />

        

        <Route path='/courses/react-basics/m1/react-introduction' element={<IntroductionToReact/>} />
        <Route path='/courses/react-basics/m1/setting-up-with-js' element={<SettingUpWithReact/>} />
        <Route path='/courses/react-basics/m1/understanding-jsx' element={<UnderstandingJSX/>} />
        <Route path='/courses/react-basics/m2/functional-and-class-components' element={<Components/>} />
        <Route path='/courses/react-basics/m2/props' element={<Props/>} />
        <Route path='/courses/react-basics/m2/react-events' element={<ReactEvents/>} />
        <Route path='/courses/react-basics/m2/conditional-rendering' element={<ConditionalRendering/>} />
        <Route path='/courses/react-basics/m2/rendering-arrays' element={<RenderingArrays/>} />
        <Route path='/courses/react-basics/m3/introduction-to-react-router' element={<ReactRouter/>} />
        <Route path='/courses/react-basics/m3/setting-up-react-router' element={<SettingRouter/>} />
        <Route path='/courses/react-basics/m3/route-and-link' element={<RouteAndLink/>} />
        <Route path='/courses/react-basics/m3/react-css-styling' element={<ReactCss/>} />
        <Route path='/courses/react-basics/m4/understanding-state-and-usestate-hook' element={<ReactCss/>} />
        <Route path='/courses/react-basics/m4/useeffect-hook' element={<ReactCss/>} />
        <Route path='/courses/react-basics/m4/some-more-hooks' element={<ReactCss/>} />


      </Routes>
    </>
  );
}
